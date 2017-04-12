/* eslint-disable no-underscore-dangle, no-param-reassign, arrow-body-style, object-shorthand */
import PrimeStore from './primeStore';

export default class WordCounter {
  constructor(file, callback) {
    this._file = file;
    this._callback = callback;
    this._reader = new window.FileReader();
    this._primeStore = new PrimeStore;
  }

  returnWordCountArray() {
    return new Promise((resolve, reject) => {
      this._parseTextFile()
        .then(
          (string) => {
            const resultsArray = this._createResultsArray(string);
            this._sendToCallback(resultsArray);
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

  _createResultsArray(string) {
    const unCountedWordsArray = this._createWordsArray(string);
    const wordCountObject = this._createWordCountObject(unCountedWordsArray);
    let resultsArray = this._covertCountsToArray(wordCountObject);
    resultsArray = resultsArray.sort(this._compareWordsByCount);
    return resultsArray;
  }

  _covertCountsToArray(wordCountObject) {
    const resultsArray = [];
    Object.keys(wordCountObject).forEach((word) => {
      const wordCount = wordCountObject[word];
      const isPrime = this._checkIfPrime(wordCount);
      const wordObject = {
        word: word,
        count: wordCount,
        prime: isPrime,
      };
      resultsArray.push(wordObject);
    });
    return resultsArray;
  }

  _createWordsArray(string) {
    const cleanedString = this._cleanString(string);
    const array = cleanedString.split('|');
    // Remove empty value from end of array
    array.pop();
    return array;
  }

  _cleanString(string) {
    return string.replace(/[^A-Za-z']/g, ' ')
                 .replace(/\s+/g, '|')
                 .toLowerCase()
                 .trim();
  }

  _createWordCountObject(wordsArray) {
    return wordsArray.reduce((results, word) => {
      results[word] = (results[word] || 0) + 1;
      return results;
    }, {});
  }

  _compareWordsByCount(a, b) {
    if (a.count < b.count) {
      return 1;
    }
    if (a.count > b.count) {
      return -1;
    }
    return 0;
  }

  _checkIfPrime(int) {
    return this._primeStore.isPrime(int);
  }

  _sendToCallback(arg) {
    this._callback(arg);
  }

}
