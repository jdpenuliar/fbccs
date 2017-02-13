```
> npm install
> npm start
```
few questions about the instructions.
I assumed this is the right flow you want if not please contact me at jaydz.penuliar@gmail.com or 4089307903 to change the flow according to what you want.

first input is time elapsed
second input is day

conditions are based on the array that instruction has provided

[
  {startTime: 0, endTime: 120, daysOfWeekOpen: [1, 2, 3, 4], menu: "Midnight menu"}, 
  {startTime: 660, endTime: 780, daysOfWeekOpen: [1, 2, 3, 4], menu: "Lunch menu"}, 
  {startTime: 1080, endTime: 1200, daysOfWeekOpen: [1, 2, 3, 4], menu: "Dinner menu"},
  {startTime: 0, endTime: 1440, daysOfWeekOpen: [7], menu: "Sunday menu"}
]

if first input does not come in between the startTimes and endTimes, it will give the next menu
if day is not included in the daysOfWeekOpens no menu is given
