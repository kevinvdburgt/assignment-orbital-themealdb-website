export class FetchRandomMealException extends Error {
  constructor(httpCode: number) {
    super(`Failed to fetch a random meal (http error code: ${httpCode})`);
  }
}
