/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */
import { expect } from 'chai';
import WordCounter from '../../src/app/helpers/wordCounter';
import sinon from 'sinon';

describe('WordCounter', () => {

  let wordCounter;
  const date = new Date();
  const string = 'test Test tesT! This IS a TEST. It /n is not a very fUn string. ////. 2324.'; //eslint-disable-line
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
            expect(callbackArg.test).to.equal(4);
            expect(callbackArg.this).to.equal(1);
            expect(callbackArg.very).to.equal(1);
            expect(callbackArg.fun).to.equal(1);
            expect(callbackArg.is).to.equal(2);
            expect(callbackArg.a).to.equal(2);
            done();
          }
        )
        .catch();
    });
  });

});
