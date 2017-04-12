/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */
import { expect } from 'chai';
import PrimeStore from '../../src/app/helpers/primeStore';

describe('PrimeStore', () => {

  let primeStore;

  beforeEach(() => {
    primeStore = new PrimeStore();
  });

  it('creates an empty _primes object on initialization', () => {
    const primes = primeStore._primes;
    expect(primes).to.be.a('object');
    expect(Object.keys(primes)).to.have.length(0);
  });

});
