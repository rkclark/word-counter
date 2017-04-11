import React from 'react';

export default class FileInputConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.sendTextFileForProcessing = this.sendTextFileForProcessing.bind(this);
  }

  sendTextFileForProcessing() {
    const file = this.props.textFile[0];
    this.props.setCountedWords(file);
  }

  loadContent() {
    if (this.props.textFile.length > 0) {
      const file = this.props.textFile[0];
      return (
        <div>
          <span className="ready-message" >File {file.name} ready for word counting!</span>
          <button onClick={this.sendTextFileForProcessing} >Go!</button>
        </div>
      );
    }
    return '';
  }

  render() {
    const content = this.loadContent();
    return (
      <div>
        {content}
      </div>
    );
  }
}

FileInputConfirmation.propTypes = {
  textFile: React.PropTypes.array.isRequired,
  setCountedWords: React.PropTypes.func.isRequired,
};
