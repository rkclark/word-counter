import React from 'react';

const ResultsContainer = ({ countedWords }) => {
  const loadContent = () => {
    if (Object.keys(countedWords).length > 0) {
      return (
        <table></table>
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
