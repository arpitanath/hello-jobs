import React,{useState} from "react";
import { Card, Button, Modal, Select, Form } from "semantic-ui-react";

function Skills() {
  const [open, setOpen] = React.useState(false);
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "Team Management",
    "Web Development"
  ];
  const [skillsData, setSkillsData] = useState(skills);
  const rows = [];
  skillsData.map(item => {
    rows.push(
      <tr>
        <td>{item}</td>
      </tr>
    );
  });
  const options = [
    { key: "1", text: "Scrum Master", value: "Scrum Master" },
    { key: "2", text: "Agile Development", value: "Agile Development" },
    { key: "3", text: "SQL", value: "SQL" },
    { key: "4", text: "ABAP", value: "ABAP" }
  ];
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
                  Add Skills
                </Button>
              }
            >
              <Modal.Header>Add Skills</Modal.Header>
              <Modal.Content>
                <Form.Field
                  control={Select}
                  label="Type"
                  placeholder="Select"
                  options={options}
                  id="setskill"
                  onChange={(e)=>skillsData.push(e.target.innerText)}
                />
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button
                  content="Save"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    setSkillsData(skillsData);
                    setOpen(false)
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

export default Skills;
