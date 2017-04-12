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

  describe('#returnWordCountObject', () => {

    it('returns a promise', () => {
      expect(wordCounter.returnWordCountObject()).to.be.instanceOf(Promise);
    });

    it('when resolved, returns word count object to callback function', (done) => {
      wordCounter.returnWordCountObject()
        .then(
          () => {
            const callbackArg = callbackSpy.args[0][0];
            expect(callbackArg.test.count).to.equal(4);
            expect(callbackArg.test.prime).to.be.false;
            expect(callbackArg.this.count).to.equal(1);
            expect(callbackArg.this.prime).to.be.false;
            expect(callbackArg.very.count).to.equal(1);
            expect(callbackArg.fun.count).to.equal(1);
            expect(callbackArg.is.count).to.equal(3);
            expect(callbackArg.is.prime).to.be.true;
            expect(callbackArg.a.count).to.equal(2);
            expect(callbackArg.a.prime).to.be.true;
            done();
          }
        )
        .catch();
    });
  });

});
