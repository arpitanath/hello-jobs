import React from "react";
import history from "../../utils/history";
import { Button } from "semantic-ui-react";

export function Logout() {
  return (
    <>
      <Button
        color="black"
        className="bannerBtn"
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        <i class="user icon"></i>
        Logout
      </Button>
    </>
  );
}
