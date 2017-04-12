import React from 'react';
import WordTableRow from './WordTableRow';

const ResultsContainer = ({ countedWords }) => {
  const buildTableRowsArray = (keys) => {
    const tableRowsArray = [];
    keys.forEach((key) => {
      const countValue = countedWords[key].count;
      const primeValue = countedWords[key].prime;
      const wordObject = { word: key, count: countValue, prime: primeValue };
      tableRowsArray.push(
        <WordTableRow wordObject={wordObject} key={`${key}_${countValue}`} />
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
  countedWords: React.PropTypes.object.isRequired,
};

export default ResultsContainer;
