import { isOpenNowProps } from "@/helpers/is-open-now";

export const schedule: isOpenNowProps[] = [
  { weekDay: "Monday", opening: "Closed", closing: "Closed" },
  { weekDay: "Tuesday", opening: "18:00", closing: "02:00" },
  { weekDay: "Wednesday", opening: "18:00", closing: "02:00" },
  { weekDay: "Thursday", opening: "18:00", closing: "02:00" },
  { weekDay: "Friday", opening: "18:00", closing: "02:00" },
  { weekDay: "Saturday", opening: "09:00", closing: "02:00" },
  { weekDay: "Sunday", opening: "09:00", closing: "23:00" },
];