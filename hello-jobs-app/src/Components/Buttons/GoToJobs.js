import React from "react";
import history from "../../utils/history";
import { Button } from "semantic-ui-react";

export function GoToJobs() {
  return (
    <>
      <Button
        color="black"
        className="bannerBtn"
        type="button"
        onClick={() => {
          history.push("/jobs");
        }}
      >
        <i class="envelope icon"></i>
        Jobs
      </Button>
    </>
  );
}

