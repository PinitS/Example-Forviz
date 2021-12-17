import moment from "moment";

export const convertDateToTime = (date: string) => {
  return moment(date).format("HH:mm");
};

export const convertDateToTimeStartAndEnd = (start: string, end: string) => {
  return `${moment(start).format("HH:mm")} - ${moment(end).format("HH:mm")}`;
};

export const convertDateFormatForContent = (start: string) => {
  return moment(start).format("ddd, DD MMM");
};
