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
        <div className="col-12 col-md-6 offset-md-3 pt-4">
          <table className="table table-sm table-striped table-hover m-auto">
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
        </div>
      );
    }
    return '';
  };

  const content = loadContent();

  return (
    <div className="row">
      {content}
    </div>
  );
};


ResultsContainer.propTypes = {
  countedWords: React.PropTypes.array.isRequired,
};

export default ResultsContainer;
