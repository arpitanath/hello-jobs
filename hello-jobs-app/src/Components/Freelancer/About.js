import React from "react";
import history from "../../utils/history";

function About() {
  return (
   
       <div className="form-inner2">
          <h2>About You</h2>
          <div className="form-group">
            <label htmlFor="email">Email ID </label>
            <input type="email" name="email" id="email" />
         
        
            <label htmlFor="pwd">Name </label>
            <input type="text" name="pwd" id="pwd" />
          
            <label htmlFor="pwd">Add Git Hub Profile </label>
            <input type="text" name="pwd" id="pwd" />
        
            <button
            type="button"
          >
             Submit
          </button>
        </div>
    </div>
  );
}

export default About;
