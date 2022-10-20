import {Range} from "react-date-range";
import {IStockData} from "../interfaces/stock-data";

const getDateArray = (dateRange: Range): string[] => {
  const result: string[] = [];
  const startDate = dateRange.startDate;
  const endDate = dateRange.endDate;

  if (startDate && endDate) {
    while (startDate <= endDate) {
      const date = `${startDate.getDate()}-${startDate.getMonth()}-${startDate.getFullYear()}`;
      result.push(date);
      startDate.setDate(startDate.getDate() + 1);
    }
  }
  return result;
};

const getRandomPrice = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

const generateStockData = (dateRange: Range): IStockData[] => {
  const dates = getDateArray(dateRange);
  const result: IStockData[] = [];

  for (let date of dates) {
    result.push({date, price: getRandomPrice()});
  }
  return result;
};

export default generateStockData;
