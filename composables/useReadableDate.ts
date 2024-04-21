import { type MonthType} from "@/translations/types";

const getDayWithSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return day + "th";
  }
  switch (day % 10) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}

const getReadableDate = (inputDate: string, MONTH_TRANSLATIONS: MonthType): string => {
  if (!inputDate) {
    return "";
  }
  let dateParts: string[] = inputDate.split("-");
  let year: number = parseInt(dateParts[0]);
  let month: number = parseInt(dateParts[1], 10) - 1;
  let day: number = parseInt(dateParts[2]);

  let formattedDate: Date = new Date(year, month, day);

  let dayWithSuffix: string = getDayWithSuffix(formattedDate.getDate());
  let monthName: string = formattedDate.toLocaleString("default", { month: "short" });
  let translatedMonthName: string = MONTH_TRANSLATIONS[monthName.toLowerCase() as keyof MonthType];
  let fullYear: number = formattedDate.getFullYear();

  return `${dayWithSuffix} ${translatedMonthName} ${fullYear}`;
}

export default function () {
  return {
    getReadableDate
  };
};