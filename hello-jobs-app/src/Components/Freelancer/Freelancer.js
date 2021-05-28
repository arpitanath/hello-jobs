import React from "react";
import {About, Experience , Skills, Projects} from "./index";

export function Freelancer() {
  return (
    <>
      <div className="form-freelancer">
        <About />
        <Experience/>
        <Skills />
        <Projects /> 
        </div>
    </>
  );
}
