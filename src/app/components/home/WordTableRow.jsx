/* eslint-disable arrow-body-style */
import React from 'react';

const WordTableRow = ({ wordObject }) => {
  return (
    <tr>
      <td>{wordObject.word}</td>
      <td>{wordObject.count}</td>
      <td>{`${wordObject.prime}`}</td>
    </tr>
  );
};

WordTableRow.propTypes = {
  wordObject: React.PropTypes.object.isRequired,
};

export default WordTableRow;
