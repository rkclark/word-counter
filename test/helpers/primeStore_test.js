/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */
import { expect } from 'chai';
import PrimeStore from '../../src/app/helpers/primeStore';

describe('PrimeStore', () => {

  let primeStore;

  beforeEach(() => {
    primeStore = new PrimeStore();
  });

  it('creates an empty _calculatedNumbers object on initialization', () => {
    const obj = primeStore._calculatedNumbers;
    expect(obj).to.be.a('object');
    expect(Object.keys(obj)).to.have.length(0);
  });

  describe('#isPrime', () => {

    it('returns true if number is prime', () => {
      expect(primeStore.isPrime(37)).to.be.true;
      expect(primeStore.isPrime(1021)).to.be.true;
      expect(primeStore.isPrime(499)).to.be.true;
    });

    it('returns false if number is not prime', () => {
      expect(primeStore.isPrime(36)).to.be.false;
      expect(primeStore.isPrime(1022)).to.be.false;
      expect(primeStore.isPrime(500)).to.be.false;
    });

    it('adds prime to _calculatedNumbers object with value true', () => {
      primeStore.isPrime(37);
      expect(primeStore._calculatedNumbers[37]).to.be.true;
    });

    it('adds non-prime to _calculatedNumbers object with value false', () => {
      primeStore.isPrime(36);
      expect(primeStore._calculatedNumbers[36]).to.be.false;
    });

  });

});
