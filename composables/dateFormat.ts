import moment from "moment";
export const dateFormat = (time: [string, number], format: string = "LLLL") => {
  return moment(time).format(format);
};