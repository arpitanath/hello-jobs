import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Button, Icon, Table } from "semantic-ui-react";
import { Modal, Form } from "semantic-ui-react";

function Employer() {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState("");
  const [jobs, setJobs] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/data/employerJobs.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        setData(res);
      });
  });

  //initial setting data in itemList
  useEffect(() => {
    if (jobs.length == 0) {
      setJobs(data);
    }
  });

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  const getOptions = (number, prefix = "Skill ") =>
    _.times(number, index => ({
      key: index,
      text: `${prefix}${index}`,
      value: index
    }));

  function submit(e) {
    const length = e.target.elements.length;
    const obj = {};
    const jobId = e.target.elements[0].value;
    const companyName = e.target.elements[1].value;
    const Position = e.target.elements[2].value;
    const Department = e.target.elements[3].value;
    const job = e.target.elements[5].value;
    //const jd = e.target.elements[6].files[0].name;
    if (jobId == "" || Department == "" || Position == "") {
      setError(true);
      return false;
    }
    obj["id"] = jobId;
    obj["Department"] = Department;
    obj["Position"] = Position;
    obj["Applicants"] = 0;
    setJobs(d => [...d, obj]);
    setOpen(false);
  }

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
          {jobs &&
            jobs.map(item => (
              <Table.Row>
                <Table.Cell>{item?.id}</Table.Cell>
                <Table.Cell>{item?.Department}</Table.Cell>
                <Table.Cell>{item?.Position}</Table.Cell>
                <Table.Cell>
                </Table.Cell>
              </Table.Row>
            ))}
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
                  <Form onSubmit={submit}>
                    {error && (
                      <span style={{ color: "red" }}>
                        Please fill all the fields
                      </span>
                    )}
                    <Form.Group widths="equal">
                      <Form.Input fluid label="Job ID" placeholder="Job ID" />
                      <Form.Input fluid label="Company" placeholder="Company" />

                      <Form.Input
                        fluid
                        label="Position"
                        placeholder="Position"
                      />
                      <Form.Input
                        fluid
                        label="Department"
                        placeholder="Department"
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
                        onChange={e => {
                          setSkills(a => [...a, e.target.innerText]);
                        }}
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
                    <Form.Button>Upload Job</Form.Button>
                  </Form>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpen(false)}>
                    Close
                  </Button>
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
