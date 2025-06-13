import React, { useState } from 'react'
import './Search.css';
import { IoIosSearch } from "react-icons/io";
import logo from '../Assets/logo.jpg'
import courses from '../Assets/Courses.json';
const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // const suggestions = [
  //   'Python',
  //   'JavaScript',
  //   'React',
  //   'Node.js',
  //   'Java',
  //   'C++',
  //   'C',
  //   'HTML',
  //   'CSS',
  //   'MongoDB'
  // ];

  const handleChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    if (userInput.length > 0) {
      const filtered = courses.filter((item) =>
        item.name.toLowerCase().startsWith(userInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className='search'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1>Search 100+ learning programs</h1>
      <div className="search-box">
        <div className="search-icon">
          <IoIosSearch />
        </div>
        <input type="text" placeholder="e.g  Bioinformatics" className="search-input" value={query} onChange={handleChange} />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="suggestions-list">
            {filteredSuggestions.map((courses, id) => (
              <li key={id} onClick={() => handleSuggestionClick(courses.name)} className="suggestion-item">
                {courses.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="popular-categories-row">
        <div className="popular-label">Popular</div>
        <div className="category-box">Bioinformatics</div>
        <div className="category-box">Computational Biology</div>
        <div className="category-box">Genomic Data</div>
        <div className="category-box">Systems Biology</div>
      </div>
    </div>
  )
}

export default Search
