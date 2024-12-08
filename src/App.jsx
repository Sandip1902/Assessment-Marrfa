import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import FilterBar from './components/FilterBar';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [data] = useState([
    { title: 'React Tutorial', category: 'Programming' },
    { title: 'Travel Guide to Paris', category: 'Travel' },
    { title: 'Cooking Pasta 101', category: 'Cooking' },
    { title: 'JavaScript Basics', category: 'Programming' },
    { title: 'Top 10 Beaches', category: 'Travel' },
    { title: 'Baking Made Simple', category: 'Cooking' },
    { title: 'Node.js for Beginners', category: 'Programming' },
    { title: 'Hiking Trails in Europe', category: 'Travel' },
    { title: 'Grilling Techniques', category: 'Cooking' },
  ]);

  const filters = ['All', 'Programming', 'Travel', 'Cooking'];

  const filteredResults = data
    .filter((item) =>
      filter === 'All' || item.category === filter
    )
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((item, index) => ({ ...item, id: index + 1 }));

  return (
    <div className="app">
      <div className="container">
        <h1>Techy Blogs</h1>
        <p>Search through a variety of topics using the bar below. Apply filters for precise results.</p>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBar filter={filter} setFilter={setFilter} filters={filters} />
        <ResultsList results={filteredResults} />
      </div>
    </div>
  );
};

export default App;
