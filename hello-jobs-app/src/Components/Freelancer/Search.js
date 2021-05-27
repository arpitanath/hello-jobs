import React from "react";
import history from "../../utils/history";
import { Card, Button, Modal, Select, Form } from "semantic-ui-react";

function Search() {
  return (
    <div>
      <h2>Search</h2>
      <div className="search-grid">
        <Button
          basic
          color="green"
          onClick={() => {
            history.push("/freelancer");
          }}
        >
          Go Back
        </Button>
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
        <Button basic color="green">
          Go
        </Button>
      </div>
    </div>
  );
}

export default Search;
