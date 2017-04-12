/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */
import { expect } from 'chai';
import WordCounter from '../../src/app/helpers/wordCounter';
import PrimeStore from '../../src/app/helpers/primeStore';
import sinon from 'sinon';

describe('WordCounter', () => {

  let wordCounter;
  const date = new Date();
  const string = 'test Test tesT! is This IS a TEST. It /n is not a very fUn string. ////. 2324.'; //eslint-disable-line
  const file = new File([string], 'test.txt', { type: 'text/plain', lastModified: date });
  const testFunc = (arg) => arg;
  const callbackSpy = sinon.spy(testFunc);

  beforeEach(() => {
    wordCounter = new WordCounter(file, callbackSpy);
  });

  afterEach(() => {
    callbackSpy.reset();
  });

  it('initializes with file and callback args', () => {
    expect(wordCounter._file).to.equal(file);
    expect(wordCounter._callback).to.equal(callbackSpy);
  });

  it('creates a new FileReader instance on initialization', () => {
    expect(wordCounter._reader).to.be.instanceOf(window.FileReader);
  });

  it('creates a new PrimeStore instance on initialization', () => {
    expect(wordCounter._primeStore).to.be.instanceOf(PrimeStore);
  });

  describe('#_parseTextFile', () => {

    it('returns a promise', () => {
      expect(wordCounter._parseTextFile()).to.be.instanceOf(Promise);
    });

    it('returns the content of the file as a string on resolution', (done) => {
      wordCounter._parseTextFile()
        .then(
          (result) => {
            expect(result).to.equal(string);
            done();
          }
        )
        .catch();
    });
  });

  describe('#returnWordCountArray', () => {

    it('returns a promise', () => {
      expect(wordCounter.returnWordCountArray()).to.be.instanceOf(Promise);
    });

    it('when resolved, returns word count array to callback function', (done) => {
      wordCounter.returnWordCountArray()
        .then(
          () => {
            const callbackArg = callbackSpy.args[0][0];

            expect(callbackArg).to.contain(
              { word: 'test', count: 4, prime: false }
            );

            expect(callbackArg).to.contain(
              { word: 'this', count: 1, prime: false }
            );

            expect(callbackArg).to.contain(
              { word: 'very', count: 1, prime: false }
            );

            expect(callbackArg).to.contain(
              { word: 'fun', count: 1, prime: false }
            );

            expect(callbackArg).to.contain(
              { word: 'is', count: 3, prime: true }
            );

            expect(callbackArg).to.contain(
              { word: 'a', count: 2, prime: true }
            );

            done();
          }
        )
        .catch();
    });
  });

});
