import React from 'react';
import WordTableRow from './WordTableRow';

const ResultsContainer = ({ countedWords }) => {
  const buildTableRowsArray = (keys) => {
    const tableRowsArray = [];
    keys.forEach((key) => {
      const value = countedWords[key];
      const wordObject = { word: key, count: value };
      tableRowsArray.push(
        <WordTableRow wordObject={wordObject} key={`${key}_${value}`} />
      );
    });
    return tableRowsArray;
  };

  const loadContent = () => {
    const keys = Object.keys(countedWords);
    if (keys.length > 0) {
      const rows = buildTableRowsArray(keys);
      return (
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Count</th>
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
  countedWords: React.PropTypes.object.isRequired,
};

export default ResultsContainer;
