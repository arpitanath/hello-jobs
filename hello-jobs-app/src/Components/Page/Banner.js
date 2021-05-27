import React from 'react';
import history from "../../utils/history";
import { Button } from 'semantic-ui-react'

function Banner() {
    return (
        <div class="headerBanner">
        <h1>Hello Jobs</h1>
        <Button
            className="bannerBtn"
            type="button"
            onClick={() => {
              history.push("/jobs");
            }}
          >
             Jobs
          </Button>
      </div>
    )
}

export default Banner;
