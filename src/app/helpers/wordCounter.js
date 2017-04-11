/* eslint-disable no-underscore-dangle */
export default class WordCounter {
  constructor(file, callback) {
    this._file = file;
    this._callback = callback;
    this._reader = new window.FileReader();
  }

  getFile() {
    return this._file;
  }

  getReader() {
    return this._reader;
  }

  _parseTextFile() {
    const reader = this.getReader();
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.onerror = () => {
        reject('Error reading file');
      };
      reader.readAsText(this.getFile());
    });
  }
}
