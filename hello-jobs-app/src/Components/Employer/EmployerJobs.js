import React from "react";
import _ from 'lodash'
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";
import { Dropdown, Modal, Select, Form } from "semantic-ui-react";

function Employer() {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  const getOptions = (number, prefix = 'Skill ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))

  return (
    <div className="job-list">
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Job ID</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            <Table.HeaderCell>Applicants</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1452828</Table.Cell>
            <Table.Cell>ITG/QA</Table.Cell>
            <Table.Cell>Senior Software Engineer (Front End)</Table.Cell>
            <Table.Cell>0</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>172524</Table.Cell>
            <Table.Cell>QuickBooks Org</Table.Cell>
            <Table.Cell>Staff Software Engineer</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>626281</Table.Cell>
            <Table.Cell>Production</Table.Cell>
            <Table.Cell>SDE 2</Table.Cell>
            <Table.Cell>7</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <Button
                    floated="left"
                    icon
                    labelPosition="left"
                    primary
                    size="small"
                  >
                    <Icon name="envelope outline" /> Add Jobs
                  </Button>
                }
              >
                <Modal.Header>Post Job</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Input fluid label="Company" placeholder="Company" />
                     
                      <Form.Input
                        fluid
                        label="Contact Person"
                        placeholder="Contact Person"
                      />
                    
                    </Form.Group>
                    <Form.Group widths="equal">
                    
                      <Form.Dropdown
                      label="Skills"
                        multiple
                        search
                        selection
                        options={getOptions(5)}
                        placeholder="Select Skills"
                      />
                     
                    
                    </Form.Group>
                  
                    <Form.Group widths="equal">
                       
                    <Form.TextArea
                      label="Job requirements"
                      placeholder="Tell us more about you..."
                    />
                   </Form.Group>
                
                    <label>Upload Job Description</label>
                    <br></br>
                    <br></br>
                    <input type="file" onChange={handleUpload} />
                    <br></br>
                    <br></br>
                    <Form.Button>Submit</Form.Button>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpen(false)}>
                    Close
                  </Button>
                  <Button
                    content="Add Job"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => {
                      // setSkillsData(skillsData);
                      setOpen(false);
                    }}
                    positive
                  />
                </Modal.Actions>
              </Modal>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default Employer;
