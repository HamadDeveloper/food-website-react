import React from "react";
import './styles.css';


function SearchBar(){
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for Food ..."></input>
            <button>Search</button>
        </div>
    );
}
 export default SearchBar;