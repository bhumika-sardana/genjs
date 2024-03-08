/*
* Write a function that will take a date and compare with today date and return text:
* - Today: same year, same month, same date
* - Yesterday: date = today - 1
* - This week: today - 7 < date < today - 1
* - Last week: today - 14 < date <= today - 7
* - This month: same year, same month, date <= today - 14
* - Last month: month = current month - 1
* - This year: same year
* - last year: year = current year - 1
* - Long time ago: everything else
*
* Lastly, please write a unit test for calculateRelativeDate function
* */

const calculateRelativeDate = (inputDate) => {
  const today= new Date();
  const date= new Date(inputDate);

  const millisecondsPerday= 24*60*60*1000;
  const differenceInDays= Math.floor((today-date)/millisecondsPerday);

  //  Today
  if(differenceInDays === 0 ){
    return 'Today';
  }
  //Yesterday
  else if (differenceInDays == 1){
    return 'Yesterday';
  }
  //This Week
  else if(differenceInDays>=2 && differenceInDays <=7){
    return 'This week';
  }
  // Last week
  else if (differenceInDays > 7 && differenceInDays <= 14) {
    return 'Last week';
  }
  // This month
  else if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth()) {
    return 'This month';
  }
  // Last month
  else if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() - 1) {
    return 'Last month';
  }
  // This year
  else if (date.getFullYear() === today.getFullYear()) {
    return 'This year';
  }
  // Last year
  else if (date.getFullYear() === today.getFullYear() - 1) {
    return 'Last year';
  }
  // Long time ago
  else {
    return 'Long time ago';
  }
};

const View = {
  init: () => {
    document.getElementById('relative-date-btn').addEventListener('click', () => {
      const msgElement = document.getElementById('relative-date-msg');
      const inputDateElem = document.getElementById('relative-date-input');
      msgElement.textContent = calculateRelativeDate(inputDateElem.value);
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);
export {calculateRelativeDate};
