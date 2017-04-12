/* eslint-disable arrow-body-style */
import React from 'react';

const WordTableRow = ({ word, count, prime }) => {
  return (
    <tr>
      <td>{word}</td>
      <td>{count}</td>
      <td>{`${prime}`}</td>
    </tr>
  );
};

WordTableRow.propTypes = {
  word: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  prime: React.PropTypes.bool.isRequired,
};

export default WordTableRow;
