/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */
import { expect } from 'chai';
import PrimeStore from '../../src/app/helpers/primeStore';
import sinon from 'sinon';

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

    describe('When passed a prime', () => {

      it('returns true', () => {
        expect(primeStore.isPrime(37)).to.be.true;
        expect(primeStore.isPrime(1021)).to.be.true;
        expect(primeStore.isPrime(499)).to.be.true;
      });

      it('adds number to _calculatedNumbers object with value true', () => {
        primeStore.isPrime(37);
        expect(primeStore._calculatedNumbers[37]).to.be.true;
      });

      it('does not run _calculateIfPrime function if number has already been calculated', () => {
        const spy = sinon.spy(PrimeStore.prototype, '_calculateIfPrime');
        primeStore.isPrime(37);
        primeStore.isPrime(37);
        expect(spy.calledOnce).to.be.true;
        spy.restore();
      });
    });

    describe('When passed a non-prime', () => {

      it('returns false', () => {
        expect(primeStore.isPrime(36)).to.be.false;
        expect(primeStore.isPrime(1022)).to.be.false;
        expect(primeStore.isPrime(500)).to.be.false;
      });

      it('adds number to _calculatedNumbers object with value false', () => {
        primeStore.isPrime(36);
        expect(primeStore._calculatedNumbers[36]).to.be.false;
      });

      it('does not run _calculateIfPrime function if number has already been calculated', () => {
        const spy = sinon.spy(PrimeStore.prototype, '_calculateIfPrime');
        primeStore.isPrime(36);
        primeStore.isPrime(36);
        expect(spy.calledOnce).to.be.true;
        spy.restore();
      });
    });

  });

});
