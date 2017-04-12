/* eslint-disable no-underscore-dangle, no-param-reassign */
export default class PrimeStore {
  constructor() {
    this._primes = [];
  }

  isPrime(int) {
    for (let i = 2; i <= parseInt(Math.sqrt(int), 10); i++) {
      if (int % i === 0) {
        return false;
      }
    }
    this._pushToPrimesArray(int);
    return int > 1;
  }

  _pushToPrimesArray(int) {
    this._primes.push(int);
  }

}
