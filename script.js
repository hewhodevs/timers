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
        name: "FreeCodeCamp",
        duration: 0,
      },
    ]
  }
];

// ----------------------------------
// DOMContentLoaded
// ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
  displayAlertTimers(timers);
});

// ----------------------------------
// Functions
// ----------------------------------

// display the timers from each object element in the array
const displayAlertTimers = (arr) => {
  arr.forEach(timerSet => {
    const category = timerSet.category;
    const timers = timerSet.timers;
    const categoryDiv = document.getElementById(`${category}`);
    categoryDiv.append(createTimerListElement(category, timers));
  });
}

const createTimerListElement = (category, timers) => {
  let timerListDiv = document.createElement(`${category}-list`);
  timerListDiv.className = "category__timer-list";
  timers.forEach((timer, index) => {
    timerListDiv.append(createTimerElement(category, timer, index));
  });
  return timerListDiv;
}

const createTimerElement = (category, timer, index) => {
  let timerDiv = document.createElement('div');
  timerDiv.id = `${category}-${index}`
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