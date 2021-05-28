import React, { useState } from "react";
import history from "../../utils/history";
import { Button, Form, Select } from "semantic-ui-react";

export function LoginForm() {
  const options = [
    { key: "f", text: "freelancer", value: "Freelancer" },
    { key: "e", text: "employer", value: "Employer" }
  ];
  const [email, setEmail] = useState("");
  let errorsObj = { email: "", password: "", type: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }

    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }

    if (type === "") {
      errorObj.type = "Please select Login Type";
      error = true;
    }
    setErrors(errorObj);

    if (error) return;
    else {
      history.push(`/${type}`);
    }
  }

  return (
    <div>
    <h2 class="heading">Don't Miss out on your next Oppurtunity</h2>
    <div className="form-inner">
    
      <Form onSubmit={onLogin}>
        <Form.Field>
          <span style={{ color: "red" }}>{errors.email}</span>
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Email ID"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <span style={{ color: "red" }}>{errors.password}</span>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Field>
        <span style={{ color: "red" }}>{errors.type}</span>
        <Form.Field
          control={Select}
          label="Type"
          options={options}
          placeholder="Select"
          onChange={e => setType(e.target.innerText)}
        />
        <Form.Field  color="black" control={Button}>Sign In</Form.Field>
      </Form>
      
    </div>
    </div>
  );
}
