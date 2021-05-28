import React from 'react';
import history from "../../utils/history";
import { Button } from "semantic-ui-react";

export function GoBack() {
    return (
        <>
             <Button
                color="black"
                className="bannerBtn"
                type="button"
                onClick={() => {
                  history.push("/freelancer");
                }}
              >
                <i class="backward icon"></i>
                Go Back
              </Button>
       </>
    )
}


