import React from 'react';

export default class FileInputConfirmation extends React.Component {

  loadContent() {
    if (this.props.textFile.length > 0) {
      const file = this.props.textFile[0];
      return (
        <div>
          <span className="ready-message" >File {file.name} ready for word counting!</span>
          <button>Go!</button>
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
};
