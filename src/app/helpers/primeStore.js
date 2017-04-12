/* eslint-disable no-underscore-dangle, no-param-reassign */
export default class PrimeStore {
  constructor() {
    this._calculatedNumbers = {};
  }

  isPrime(int) {
    if (this._calculateIfPrime(int)) {
      this._addToCalculatedNumbers(int, true);
      return true;
    }
    this._addToCalculatedNumbers(int, false);
    return false;
  }

  _addToCalculatedNumbers(int, bool) {
    this._calculatedNumbers[int] = bool;
  }

  _calculateIfPrime(int) {
    for (let i = 2; i <= parseInt(Math.sqrt(int), 10); i++) {
      if (int % i === 0) {
        return false;
      }
    }
    return int > 1;
  }

}
