import { FETCH_DATA, GET_CURRENT_TIME, GET_CURRENT_DAY, GET_MENU } from './types';
import _ from 'lodash';
const mainData = [
  {
    startTime: 0,
    endTime: 120,
    daysOfWeekOpen: [1, 2, 3,4],
    menu: 'Midnight menu',
  },
  {
    startTime: 660,
    endTime: 780,
    daysOfWeekOpen: [1, 2,3, 4],
    menu: 'Lunch menu',
  },
  {
    startTime: 1080,
    endTime: 1200,
    daysOfWeekOpen: [1,2, 3, 4],
    menu: 'Dinner menu',
  },
  {
    startTime: 0,
    endTime: 1440,
    daysOfWeekOpen: [7],
    menu: 'Sunday menu',
  },
];
export const getMenu = (data) => {
  let menu = '';
  for ( var i = 0; i < mainData.length; i++ ) {
    let obj = mainData[i];
    const x = data.time - obj.startTime;
    let DOWO = false;
    for ( var j = 0; j < obj.daysOfWeekOpen.length; j++ ) {
      if(data.day == obj.daysOfWeekOpen[j]) {
        DOWO = true;
        break;
      }
    }
    if (data.day == 6 || data.day == 5) {
      menu = '';
      break;
    } else if (data.time >= obj.startTime && data.time <= obj.endTime && DOWO) {
      menu = obj.menu; 
      break;
    } else {
      for ( var k = 0; k < mainData.length; k++ ) {
        if (data.time > obj.endTime && data.time < mainData[k+1].startTime) {
          menu = mainData[k+1].menu; 
          break;
        }
      }
    } 
  }
  return {
    type: GET_MENU,
    payload: menu,
  } 
};
export const fetchData = () => {
  return {
    type: FETCH_DATA,
    payload: mainData,
  }
};
export const getCurrentTime = (time) => {
  return {
    type: GET_CURRENT_TIME,
    payload: time,
  }
};
export const getCurrentDay = (day) => {
  return {
    type: GET_CURRENT_DAY,
    payload: day,
  }
};

