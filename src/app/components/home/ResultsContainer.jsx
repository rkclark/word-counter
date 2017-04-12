import React from 'react';

function ResultsContainer() {
  return (
    <div>
      Results Container
    </div>
  );
}

ResultsContainer.propTypes = {
  countedWords: React.PropTypes.object.isRequired,
};

export default ResultsContainer;
