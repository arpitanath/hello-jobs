import React, { useState } from "react";
import { Card, Button, Modal, Select, Form } from "semantic-ui-react";

function Projects() {
  const [open, setOpen] = React.useState(false);
  const projects = [
    "cart and checkout",
    "minesweeper",
    "tic tac toe",
    "snake and ladders",
    "sap hrms portal",
    "procurement app"
  ];
  const [error, setError]=useState("");
  const [projectsData, setProjects] = useState(projects);
  const [gitUser, setGitUser] = useState(false);
  const rows = [];
  projectsData.map(item => {
    rows.push(
      <tr>
        <td>{item}</td>
      </tr>
    );
  });

  function getGitData(userId) {
    fetch(`https://api.github.com/users/${userId}/repos`)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(data => {
        
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
          projectsData.push(data[i].name);
        }
        setProjects(projectsData);
        setOpen(false);
      })
      .catch((e)=>{
        console.log(e);
        setOpen(true);
        setError(e.message);
      });

     
  }
  return (
    <div className="card">
      <Card.Group>
        <Card fluid header="Skills">
          <Card.Content header="Skills" />
          <table id="skills">{rows}</table>
          <Card.Content extra id="Experience">
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <Button basic color="green">
                  Add Projects from Git
                </Button>
              }
            >
              <Modal.Header>Add Projects from Git</Modal.Header>
              <Modal.Content>
                <Form>
                  <Form.Field>
                    <span style={{ color: "red" }}>{error} :  Please try with valid userID</span>
                    <label>Enter Git User Name</label>
                    <input
                      type="text"
                      placeholder="Git User Name"
                      onChange={e => setGitUser(e.target.value)}
                    />
                  </Form.Field>
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button
                  content="Get Projects"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    getGitData(gitUser);
                  }}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default Projects;
