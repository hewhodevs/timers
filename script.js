// ----------------------------------
// Globals
// ----------------------------------

// timers[0] = alerts
// timers[1] = trackers
let timers = [
  {
    category: "alerts",
    timers: [
      {
        name: "Laundry",
        duration: 0,
        endAfter: 0,
      },
      {
        name: "Dishes",
        duration: 0,
        endAfter: 0,
      },
    ]
  },
  {
    category: "trackers",
    timers: [
      {
        name: "Portfolio",
        duration: 0,
      },
      {
        name: "FreeCodeCamo",
        duration: 0,
      }
    ]
  }
];

let alertsList;

// ----------------------------------
// DOMContentLoaded
// ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
  alertsList = getElementByID("alerts-list");
  console.log(getAlertTimers());
  displayAlertTimers(getAlertTimers());
});

// ----------------------------------
// Functions
// ----------------------------------

const getElementByID = (idstr) => {
  return document.getElementById(idstr);
}

// gets the array of alert timer objects
const getAlertTimers = () => {
  return timers[0].timers;
}

// get the array of tracker timer objects
const getTrackerTimers = () => {
  return timers[1];
}

// display each alert timer object in the array
const displayAlertTimers = (arr) => {
  // check if any timer children already displayed
  let lastChild = alertsList.lastChild;
  // check if we are already displaying timers from our list
  for (let i = 0; i < arr.length; i++) {
    const alertTimer = createAlertTimer(arr[i]);
    alertsList.append(alertTimer);
  }
}

// gets the corresponding array index of an alert timer from it's id value
const getIndexOfAlert = (alertElement) => {
  // timers have an id format of "alert-index"
  // so remove first 6 chars of id, then convert remaining index string to int
  return parseInt(alertElement.id.slice(6));
}

const createAlertTimer = (timer, index) => {
  let timerDiv = document.createElement('div');
  timerDiv.id = `alert-${index}`
  timerDiv.className = 'timer';
  timerDiv.innerHTML = `
      <div class="timer__controls">
        <button class="controls__start">Start</button>
      </div>
      <div class="timer__name">
        <h3>${timer.name}</h3>
      </div>
      <div class="timer__duration">
        <h3>00:00:00</h3>
      </div>
    </div>
  `;
  return timerDiv;
}