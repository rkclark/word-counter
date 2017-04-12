/* eslint-disable arrow-body-style */

import React from 'react';
import WordTableRow from './WordTableRow';

const ResultsContainer = ({ countedWords }) => {
  const renderTableRows = () => {
    return countedWords.map(
      (wordObject, i) =>
        <WordTableRow {...wordObject} key={i} />
    );
  };

  const loadContent = () => {
    if (countedWords.length > 0) {
      const rows = renderTableRows();
      return (
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Count</th>
              <th>Count Is Prime?</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      );
    }
    return '';
  };

  const content = loadContent();

  return (
    <div>
      {content}
    </div>
  );
};


ResultsContainer.propTypes = {
  countedWords: React.PropTypes.array.isRequired,
};

export default ResultsContainer;
