import React from 'react';

const FilterBar = ({ filter, setFilter, filters }) => {
  return (
    <div className="filter-bar">
      {filters.map((item) => (
        <button
          key={item}
          className={`filter-btn ${filter === item ? 'active' : ''}`}
          onClick={() => setFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
