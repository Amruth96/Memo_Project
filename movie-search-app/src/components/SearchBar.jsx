import React from "react";

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search for movies..."
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
