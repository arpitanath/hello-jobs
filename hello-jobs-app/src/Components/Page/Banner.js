import React from 'react';
import history from "../../utils/history";

function Banner() {
    return (
        <div class="header">
        <h1>Hello Jobs</h1>
        <button
            className="bannerBtn"
            type="button"
            onClick={() => {
              history.push("/jobs");
            }}
          >
             Jobs
          </button>
      </div>
    )
}

export default Banner;
