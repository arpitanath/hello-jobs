import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import { Freelancer, JobList } from "./Components/Freelancer";
import { Employer } from "./Components/Employer";
import { LoginForm } from "./Components/Login";
import { Banner } from "./Components/Page";
import { GoBack, GoToJobs, Logout } from "./Components/Buttons";

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
              <GoToJobs />
              <Logout />
            </div>
            <Freelancer />
          </Route>
          <Route path="/jobs">
            <div class="btnjobs">
              <GoBack />
              <Logout />
            </div>
            <JobList />
          </Route>
          <Route path="/employer">
            <div class="btnjobs">
              <Logout />
            </div>
            <Employer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
