import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import { Freelancer, JobList } from "./Components/Freelancer";
import {Employer} from "./Components/Employer";
import { LoginForm } from "./Components/Login";
import { Banner } from "./Components/Page";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <div>
      <Banner />
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <LoginForm />
          </Route>
          <Route path="/freelancer">
            <div class="btnjobs">
              <Button
                className="bannerBtn"
                type="button"
                onClick={() => {
                  history.push("/jobs");
                }}
              >
                <i class="envelope icon"></i>
                Jobs
              </Button>
            </div>
            <Freelancer />
          </Route>
          <Route path="/jobs">
            <div class="btnjobs">
              <Button
                className="bannerBtn"
                type="button"
                onClick={() => {
                  history.push("/freelancer");
                }}
              >
                <i class="backward icon"></i>
                Go Back
              </Button>
            </div>
            <JobList />
          </Route>
          <Route path="/employer">
            <Employer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
