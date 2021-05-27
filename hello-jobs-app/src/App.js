import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Freelancer from "./Components/Freelancer/Freelancer";
import Employer from "./Components/Employer/EmployerJobs";
import JobList from "./Components/Freelancer/JobDetails";
import SForm from "./Components/Login/Form";
import Banner from "./Components/Page/Banner";
import Footer from "./Components/Page/Footer";

function App() {
  return (
    <div>
      <Banner />
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <SForm />
          </Route>
          <Route path="/freelancer">
            <Freelancer />
          </Route>
          <Route path="/jobs">
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
