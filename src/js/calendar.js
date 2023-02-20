import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  calendar: document.getElementById('date-picker'),
};

const isFutureDate = selectedDate =>
  Date.now() - selectedDate <= 0 ? true : false;
const options = {
  dateFormat: 'd/m/Y',
  maxDate: new Date(),
  placeholder: 'Select Date',
  locale: {
    firstDayOfWeek: 1, // start week on Monday
  },
  parseDate: (datestr, format) => {
    return moment(datestr, format, true).toDate();
  },
  onClose(selectedDates) {
  refs.calendar.dataset.date = selectedDates[0].toISOString();   
  }, 
};

const calendar = flatpickr(refs.calendar, options);

const curDate = refs.calendar.dataset.date;
console.log(curDate);




export { calendar };
