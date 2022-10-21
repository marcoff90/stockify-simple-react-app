import calculateStock from "../src/helpers/stockify-calculation";
import {IStockData} from "../src/interfaces/stock-data";
import { ICalculationResult } from "./interfaces/calculation-result";

describe('Test calculation of stockify', () => {
  describe('If the price is descending returns null', () => {
    test('Stock calculation descending', () => {
      const initData: IStockData[] = [
        {
          date: '10-10-2022',
          price: 4
        },
        {
          date: '11-10-2022',
          price: 3
        },
        {
          date: '12-10-2022',
          price: 2
        }
      ];
      expect(calculateStock(initData)).toBeNull();
    })
  });

  describe('If the price is changing returns calculation result', () => {
    test('Changing price', () => {
      const initData: IStockData[] = [
        {
          date: '10-10-2022',
          price: 4
        },
        {
          date: '11-10-2022',
          price: 1
        },
        {
          date: '12-10-2022',
          price: 4
        },
        {
          date: '13-10-2022',
          price: 2
        },
        {
          date: '14-10-2022',
          price: 10
        },
      ];

      const expectedResult: ICalculationResult = {
        buyOnDay: '11-10-2022',
        sellOnDay: '14-10-2022',
        buyingPrice: 1,
        sellingPrice: 10,
        profit: 9
      }

      expect(calculateStock(initData)).toEqual(expectedResult);
    })
  });

  describe('If the price is changing returns calculation result', () => {
    test('Changing price', () => {
      const initData: IStockData[] = [
        {
          date: '10-10-2022',
          price: 2
        },
        {
          date: '11-10-2022',
          price: 3
        },
        {
          date: '12-10-2022',
          price: 1
        },
        {
          date: '13-10-2022',
          price: 8
        },
        {
          date: '14-10-2022',
          price: 1
        },
      ];

      const expectedResult: ICalculationResult = {
        buyOnDay: '11-10-2022',
        sellOnDay: '13-10-2022',
        buyingPrice: 3,
        sellingPrice: 8,
        profit: 5
      }

      expect(calculateStock(initData)).toEqual(expectedResult);
    })
  });

  describe('If the price is descending returns null', () => {
    test('Stock calculation descending', () => {
      const initData: IStockData[] = [
        {
          date: '10-10-2022',
          price: 4
        },
        {
          date: '11-10-2022',
          price: 3
        },
        {
          date: '12-10-2022',
          price: 2
        }
      ];
      expect(calculateStock(initData)).toBeNull();
    })
  });

  describe('If the price is changing returns calculation result', () => {
    test('Changing price', () => {
      const initData: IStockData[] = [
        {
          date: '10-10-2022',
          price: 4
        },
        {
          date: '11-10-2022',
          price: 1
        },
        {
          date: '12-10-2022',
          price: 4
        },
        {
          date: '13-10-2022',
          price: 2
        },
        {
          date: '14-10-2022',
          price: 10
        },
      ];

      const expectedResult: ICalculationResult = {
        buyOnDay: '11-10-2022',
        sellOnDay: '14-10-2022',
        buyingPrice: 1,
        sellingPrice: 10,
        profit: 9
      }

      expect(calculateStock(initData)).toEqual(expectedResult);
    })
  });

  describe('Empty array returns null', () => {
    test('Empty array input', () => {
      expect(calculateStock([])).toEqual(null);
    })
  });
})


