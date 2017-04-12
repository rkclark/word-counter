import React, { PropTypes } from 'react';
import Header from './common/Header';

function App({ children }) {
  return (
    <div className="container text-center py-5">
      <Header />
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
