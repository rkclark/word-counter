import React from 'react';
import FileInputContainer from './FileInputContainer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countedWords: [],
    };

    this.setCountedWords = this.setCountedWords.bind(this);
  }

  componentDidUpdate() {
    console.log('Home updated, state is ', this.state);
  }

  setCountedWords(data) {
    console.log('data for counted words is', data);
    this.setState({
      countedWords: [data],
    });
  }

  render() {
    return (
      <div className="container home">
        <h1>Home</h1>
        <FileInputContainer setCountedWords={this.setCountedWords} />
      </div>
    );
  }
}
