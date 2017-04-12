/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */
import { expect } from 'chai';
import PrimeStore from '../../src/app/helpers/primeStore';

describe('PrimeStore', () => {

  let primeStore;

  beforeEach(() => {
    primeStore = new PrimeStore();
  });

  it('creates an empty _primes array on initialization', () => {
    const primes = primeStore._primes;
    expect(primes).to.be.a('array');
    expect(primes).to.be.empty;
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

    it('adds prime to primes array', () => {
      primeStore.isPrime(37);
      expect(primeStore._primes).to.contain(37);
    });

    it('does not add non-prime to primes array', () => {
      primeStore.isPrime(36);
      expect(primeStore._primes).not.to.contain(36);
    });

  });

});
