import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const datetimePicker = document.querySelector('#datetime-picker')
const startButton = document.querySelector('[data-start]');

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      handleSelection(selectedDates);
  },
};

flatpickr(datetimePicker, options);

function handleSelection(selectedDates) {
  if (selectedDates[0] < Date.now()) {
    startButton.disabled = true;
    iziToast.error({
            message: 'Please choose a date in the future', 
            messageColor: `#fff`,
            position: 'topRight',
            color: `#ef4040`,
            close: false,
            timeout: 5000,  
          });  
    return;
  } else {
    userSelectedDate = selectedDates[0];
    startButton.disabled = false;
  };
};


const timer = {
  intervalId: null,
  elements: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },
  
  start() {
    this.intervalId = setInterval(() => {
      const ms = userSelectedDate - Date.now();
      if (ms>=0) {
      const timeComponents = this.convertMs(ms);
  
      this.elements.days.textContent = this.pad(timeComponents.days);
      this.elements.hours.textContent = this.pad(timeComponents.hours);
      this.elements.minutes.textContent = this.pad(timeComponents.minutes);
      this.elements.seconds.textContent = this.pad(timeComponents.seconds)
      } else {
        return;
      };

    }, 1000);

  },


  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
  pad(value) {
    return String(value).padStart(2, `0`);
    },
};

startButton.addEventListener('click', () => {
  timer.start();
  startButton.disabled = true;
  datetimePicker.disabled = true;
});