import React from 'react'

function Search() {
    return (
        <div>
             <h2>Search</h2>
          <div className="search">
          <label htmlFor="type">Industry: </label>
            <select id="dropdown">
              <option value="N/A">Select</option>
              <option value="1">Employer</option>
              <option value="2">Freelancer</option>
            </select>
            <label htmlFor="type">Skills: </label>
            <select id="dropdown">
              <option value="N/A">Select</option>
              <option value="1">Employer</option>
              <option value="2">Freelancer</option>
            </select>
            <label htmlFor="type">Salary: </label>
            <select id="dropdown">
              <option value="N/A">Select</option>
              <option value="1">Employer</option>
              <option value="2">Freelancer</option>
            </select>
            <button
            type="button"
          >
             Go
          </button>
        </div>
        </div>
    )
}

export default Search
