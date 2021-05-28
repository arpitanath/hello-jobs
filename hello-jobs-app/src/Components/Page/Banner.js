import React from "react";
import { Icon, Button } from "semantic-ui-react";
import history from "../../utils/history";

export function Banner() {
  return (
    <>
      <div class="headerBanner">
        <h1>
          <Icon name="hire a helper outline" />
          Hello Jobs
        </h1>
      </div>
    </>
  );
}
