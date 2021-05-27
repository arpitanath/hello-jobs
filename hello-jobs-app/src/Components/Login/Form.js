import React from "react";
import history from "../../utils/history";
import "./login.css";

function Form() {
  return (
    <div>
      <form>
        <div className="form-inner">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email ID: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password: </label>
            <input type="password" name="pwd" id="pwd" />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type: </label>
            <select id="dropdown">
              <option value="N/A">Select</option>
              <option value="1">Employer</option>
              <option value="2">Freelancer</option>
            </select>
          </div>
          <button
            class="btn btn-info btn-block"
            type="button"
            onClick={() => {
              history.push("/freelancer");
            }}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
