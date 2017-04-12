import React from 'react';

export default class FileInputConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.sendTextFileForProcessing = this.sendTextFileForProcessing.bind(this);
  }

  sendTextFileForProcessing() {
    const file = this.props.textFile[0];
    this.props.processTextFile(file);
  }

  loadContent() {
    if (this.props.textFile.length > 0) {
      const file = this.props.textFile[0];
      return (
        <div className="row mt-3">
          <div className="col-12">
            <span className="ready-message" >
              File <span className="filename">{file.name}</span> ready for word counting!
            </span>
          </div>
          <div className="col-12">
            <button
              onClick={this.sendTextFileForProcessing}
              className="btn btn-lg my-2 shadow-text"
            >
              Go!
            </button>
          </div>
        </div>
      );
    }
    return '';
  }

  render() {
    const content = this.loadContent();
    return (
      <div className="col-12">
        {content}
      </div>
    );
  }
}

FileInputConfirmation.propTypes = {
  textFile: React.PropTypes.array.isRequired,
  processTextFile: React.PropTypes.func.isRequired,
};
