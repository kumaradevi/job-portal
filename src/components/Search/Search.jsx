import React from 'react'
import "./Search.css"
const Search = () => {
  return (
    <div>
      <div className="main">
        <div className="main-sec">
          <div className="input-field">
            <label>Keywords</label>
            <input type="text" placeholder="What are you looking for" />
          </div>
          <div className="input-field">
            <label>Jobs Category</label>
            <input type="text" placeholder="Choose an industry" />
          </div>
          <div className="input-field">
            <label>Job Location</label>
            <input type="text" placeholder="Where do you want to work? " />
          </div>
          <div className="search-btn">
            <button>search</button>
          </div>
        </div>
        <div className="list">
          <p>Part time</p>
          <p>Full time</p>
          <p>Visa Offered</p>
          <p>Overseas Ok</p>
        </div>
      </div>
    </div>
  );
}

export default Search