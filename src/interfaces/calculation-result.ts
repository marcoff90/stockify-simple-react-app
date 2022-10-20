export interface ICalculationResult {
  buyOnDay: Date | string;
  sellOnDay: Date | string;
  buyingPrice: number;
  sellingPrice: number;
  profit: number;
}
