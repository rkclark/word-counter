import React from 'react';
import FileInputContainer from './FileInputContainer';
import ResultsContainer from './ResultsContainer';
import WordCounter from '../../helpers/wordCounter.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countedWords: [],
      loading: false,
    };

    this.processTextFile = this.processTextFile.bind(this);
    this.setCountedWords = this.setCountedWords.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  setCountedWords(data) {
    this.setState({
      countedWords: data,
      loading: false,
    });
  }

  setLoading(bool) {
    this.setState({
      loading: bool,
    });
  }

  processTextFile(file) {
    this.setLoading(true);
    const wordCounter = new WordCounter(file, this.setCountedWords);
    wordCounter.returnWordCountArray();
  }


  render() {
    return (
      <div className="home">
        <FileInputContainer processTextFile={this.processTextFile} />
        <ResultsContainer countedWords={this.state.countedWords} loading={this.state.loading} />
      </div>
    );
  }
}
