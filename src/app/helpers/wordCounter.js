/* eslint-disable no-underscore-dangle, no-param-reassign */
import PrimeStore from './primeStore';

export default class WordCounter {
  constructor(file, callback) {
    this._file = file;
    this._callback = callback;
    this._reader = new window.FileReader();
    this._primeStore = new PrimeStore;
  }

  returnWordCountObject() {
    return new Promise((resolve, reject) => {
      this._parseTextFile()
        .then(
          (string) => {
            const wordsArray = this._createWordsArray(string);
            const countsObject = this._createWordCountObject(wordsArray);
            const resultsObject = this._addPrimeIndicators(countsObject);
            this._sendToCallback(resultsObject);
            resolve();
          }
        )
        .catch(
          (err) => {
            reject(`Error: ${err}`);
          }
        );
    });
  }

  _getReader() {
    return this._reader;
  }

  _getFile() {
    return this._file;
  }

  _parseTextFile() {
    const reader = this._getReader();
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.onerror = () => {
        reject('Error reading file');
      };
      reader.readAsText(this._getFile());
    });
  }

  _createWordsArray(string) {
    const cleanedString = this._cleanString(string);
    return cleanedString.split(' ');
  }

  _cleanString(string) {
    return string.replace(/\W+/g, ' ').toLowerCase();
  }

  _createWordCountObject(wordsArray) {
    return wordsArray.reduce((results, word) => {
      results[word] = (results[word] || 0) + 1;
      return results;
    }, {});
  }

  _addPrimeIndicators(countsObject) {
    Object.keys(countsObject).forEach((word) => {
      const wordCount = countsObject[word];
      const isPrime = this._checkIfPrime(wordCount);
      countsObject[word] = {
        count: wordCount,
        prime: isPrime,
      };
    });
    return countsObject;
  }

  _checkIfPrime(int) {
    return this._primeStore.isPrime(int);
  }

  _sendToCallback(arg) {
    this._callback(arg);
  }

}
