import React from 'react';
import Dropzone from 'react-dropzone';
import FileInputConfirmation from './FileInputConfirmation';

export default class FileInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFile: [],
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
    this.setState({
      textFile: acceptedFiles,
    });
  }

  render() {
    return (
      <div>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
          accept="text/plain"
        >
          <div>Drop a text file here, or click to select one for upload.</div>
        </Dropzone>
        <FileInputConfirmation
          textFile={this.state.textFile}
          setCountedWords={this.props.setCountedWords}
        />
      </div>
    );
  }
}

FileInputContainer.propTypes = {
  setCountedWords: React.PropTypes.func.isRequired,
};
