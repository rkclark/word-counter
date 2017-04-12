import React from 'react';
import FileInputContainer from './FileInputContainer';
import WordCounter from '../../helpers/wordCounter.js'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countedWords: {},
    };

    this.processTextFile = this.processTextFile.bind(this);
    this.setCountedWords = this.setCountedWords.bind(this);
  }

  componentDidUpdate() {
    console.log('Home updated, state is ', this.state);
  }

  setCountedWords(wordsObject) {
    this.setState({
      countedWords: wordsObject,
    });
  }

  processTextFile(file) {
    console.log('about to processs: ', file);
    const wordCounter = new WordCounter(file, this.setCountedWords);
    wordCounter.returnWordCountObject();
  }


  render() {
    return (
      <div className="container home">
        <h1>Home</h1>
        <FileInputContainer processTextFile={this.processTextFile} />
      </div>
    );
  }
}
