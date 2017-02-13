import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData, getCurrentTime, getCurrentDay, getMenu } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: '',
      date: '',
    }
    this.handleChangeTimeInput = this.handleChangeTimeInput.bind(this);
    this.handleChangeDayInput = this.handleChangeDayInput.bind(this);
    this.renderArray = this.renderArray.bind(this);
  }
  componentWillMount() {
    this.props.fetchData();
  }
  handleChangeTimeInput(event) {
    this.setState({
      time: event.target.value,
    },
      () => {
        this.props.getCurrentTime(this.state.time);
      });
  }
  handleChangeDayInput(event) {
    this.setState({
      day: event.target.value,
    },
      () => {
        this.props.getCurrentDay(this.state.day);
      });
  }
  handleSubmit() {    
    this.props.getMenu({
      time: this.props.menu.time,
      day: this.props.menu.day,
    });
  }
  renderArray() {
    const arrObj = [];
    if (this.props.menu.allData) {
      this.props.menu.allData.map((obj) => {
        console.log('haha---\n', obj); 
        arrObj.push(
          <p>
            startTime: {obj.startTime} <br />
            endTime: {obj.endTime}<br />  
            daysOfWeeksOpen: {obj.daysOfWeekOpen} <br />
          </p>
        );
      });
    }
    return arrObj;
  }
  render() {
    return (
      <div>
        <p>
          few questions about the instructions. <br />
          I assumed this is the right flow you want if not please contact me at jaydz.penuliar@gmail.com or 4089307903 to change the flow according to what you want.
        </p>
        <p>
          first input is time elapsed<br />
          second input is day
        </p>
        <p>
          conditions are based on the array that instruction has provided
          {this.renderArray()}
        </p>
        <p>
          if first input does not come in between the startTimes and endTimes, it will give the next menu
          if day is not included in the daysOfWeekOpens no menu is given 
        </p>
        <div className={`form-group`}>
          <label>Time Elapsed</label>
          <input
            value={this.state.time}
            type="text"
            className="form-control"
            onChange={this.handleChangeTimeInput}
          />
        </div>
        <div className={`form-group`}>
          <label>Current Date</label>
          <input
            value={this.state.day}
            type="text"
            className="form-control"
            onChange={this.handleChangeDayInput}
          />
        </div>
        <div className={`form-group`}>
          <button type="submit" className="btn btn-secondary" onClick={() => {this.handleSubmit()}}>Submit haha</button>
        </div>
        <div className={`form-group`}>
          <p>{this.props.menu.currentMenu}</p>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { fetchData, getCurrentTime, getCurrentDay, getMenu })(App);

