import React from 'react';
import Dropzone from 'react-dropzone';

export default class FileInputContainer extends React.Component {
  onDrop(acceptedFiles, rejectedFiles) {
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
  }

  render() {
    return (
      <Dropzone
        onDrop={this.onDrop}
        multiple={false}
        accept="text/plain"
      >
        <div>Drop a text file here, or click to select one for upload.</div>
      </Dropzone>
    );
  }
}
