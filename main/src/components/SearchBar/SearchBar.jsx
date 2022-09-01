import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      var inputSearch = document.getElementById("search");
      inputSearch.value = "";
    }}>
      <div className="container"> 
        <input 
          id="search"
          type="text"
          placeholder="City..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      <button id="button" type="submit">View City</button>
    </div>   
    </form>
  );
}
