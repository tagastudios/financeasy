import moment from "moment";

const formattedDate = (timestamp, type) => {
  if (!timestamp) return;

  const date = timestamp.toDate();

  const normalDate = moment(date).format("MMMM Do, YYYY");
  const relativeDate = moment(date).fromNow();
  const calendarDate = moment(date).calendar({
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] dddd",
    sameElse: "MM/DD/YYYY",
  });

  return type === "relative"
    ? relativeDate
    : type === "calendar"
    ? calendarDate
    : normalDate;
};

const isDate = (date) => {
  const formatDate = moment(date.toDate()).calendar();
  const isValid = moment(formatDate, "MM/DD/YYYY", true).isValid();

  return isValid;
};

export default formattedDate;
export { isDate };
