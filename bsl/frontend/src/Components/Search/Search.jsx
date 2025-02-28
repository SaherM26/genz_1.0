import React from 'react'
import './Search.css';
import { IoIosSearch } from "react-icons/io";
import logo from '../Assets/logo.jpg'
const Search = () => {
  return (
    <div className='search'>
    <div className="logo">
               <img src={logo} alt=""/>
             </div>
      <h1>Search 100+ learning programs</h1>
         <div className="search-box">
  <div className="search-icon">
  <IoIosSearch />
  </div>
  <input 
    type="text" 
    placeholder="e.g  Bioinformatics" 
    className="search-input" 
  />
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
