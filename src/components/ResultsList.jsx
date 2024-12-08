import React from 'react';

const ResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.length > 0 ? (
        results.map((item) => (
          <div key={item.id} className="result-item">
            <span className="result-number">{item.id}.</span>
            <span>{item.title}</span>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultsList;
