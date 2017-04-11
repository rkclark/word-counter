export default class WordCounter {
  constructor(file, callback) {
    this.file = file;
    this.callback = callback;
    this.reader = new window.FileReader();
  }

  _parseTextFile() {
    return new Promise((resolve, reject) => {
      this.reader.onload = (e) => {
        resolve(e.target.result);
      };
      this.reader.onerror = () => {
        reject('Error reading file');
      };
      this.reader.readAsText(this.file);
    });
  }
}
