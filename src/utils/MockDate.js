import moment from "moment";

export const generateRandomTime = (selectedDate, startHour) => {
  let hourRange = 3;
  let finalDate = new Date(
    selectedDate.getYear() + 1900,
    selectedDate.getMonth(),
    selectedDate.getDate(),
    Math.random() * hourRange + startHour,
    Math.random() * 60
  );
  return generateTimeformat(finalDate);
};

export const generateRandomTimeForToday = (hour) => {
  let date = new Date();
  let finalDate = new Date(
    date.getYear() + 1900,
    date.getMonth(),
    date.getDate(),
    date.getHours() - hour,
    Math.random() * 60
  );
  return generateTimeformat(finalDate);
};

export const generateTimeformat = (date) => {
  var momentObj = moment(date);
  let formatedDate = momentObj.format("h:mm a");
  return formatedDate;
};
