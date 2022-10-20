import {IStockData} from "../interfaces/stock-data";
import {ICalculationResult} from "../interfaces/calculation-result";

const calculateStock = (stockData: IStockData[]): ICalculationResult | null => {
  let stockToBuy;
  let stockToSell;
  let maxProfit = -1;

  for (let i = 0; i < stockData.length; i++) {
    let minPrice = stockData[i].price;
    for (let j = i + 1; j < stockData.length; j++) {
      if (stockData[j].price - minPrice > maxProfit && stockData[j].price - minPrice > 0) {
        maxProfit = stockData[j].price - minPrice;
        stockToBuy = stockData[i];
        stockToSell = stockData[j];
      }
    }
  }

  if (maxProfit > 0 && stockToBuy && stockToSell) {
    return {
      buyOnDay: stockToBuy.date,
      sellOnDay: stockToSell.date,
      buyingPrice: stockToBuy.price,
      sellingPrice: stockToSell.price,
      profit: maxProfit
    }
  }
  return null;
};

export default calculateStock;
