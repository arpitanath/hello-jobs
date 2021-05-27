import React from "react";
import history from "../../utils/history";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

function Freelancer() {
  return (
    <>
      <div className="form-freelancer">
        <About />
      </div>
      <div class="btf">
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default Freelancer;