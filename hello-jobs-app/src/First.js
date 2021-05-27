import React from "react";
import history from "./utils/history";

function First() {
  return (
    <>
      <div class="display-4 mb-1">This is the First Route</div>
      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Root
      </button>
    </>
  );
}

export default First;