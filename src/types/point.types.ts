export interface IPoint {
  pointType: string;
  releaseDate: Date | string;
  numberOfPointsReceived: number;
  pointsUsed: number;
  codeOrders: number | string;
}
