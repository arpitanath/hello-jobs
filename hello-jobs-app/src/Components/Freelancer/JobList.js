import React, { useState, useEffect } from "react";

import { Button, Table, Icon, Card, Menu } from "semantic-ui-react";

export function JobList() {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [indexPerPage, setIndexPerPage] = useState(4);
  const [FirstIndex, setFirstIndex] = useState(0);
  const [minSalary, setMinSalary] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [skillsfilter,setSkillsfilter]=useState("HTML")

  useEffect(() => {
    fetch("/data/postedJobs.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        setJobs(res);
      });
  });

  useEffect(() => {
    let newarr = [];
    for (let i = FirstIndex; i < FirstIndex + indexPerPage; i++) {
      newarr.push(
        <Menu.Item as="a" onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </Menu.Item>
      );
    }
    setMenuItems(newarr);
  }, [FirstIndex]);

  return (
    <>
      <div class="job-list">
        <Card fluid header="Job Openings">
          <Card.Content header="Job Openings" />
          <Card.Content extra id="summary">
            {" "}
            <div class="search">
              <div>
                <div className="search-grid">
                  <label htmlFor="type">Minimum Salary per hour </label>
                  <select
                    id="dropdown"
                    onChange={e => {
                      setMinSalary(e.target.value);
                    }}
                  >
                    <option value="N/A">Select</option>
                    <option value="3000"> 3000</option>
                    <option value="5000"> 5000</option>
                    <option value="8000"> 8000</option>
                    <option value="9000"> 9000</option>
                  </select>
                  <label htmlFor="type">Skills Required</label>
                  <select
                    id="dropdown"
                    onChange={e => {
                      setSkillsfilter(e.target.value);
                    }}
                  >
                    <option value="N/A">Select</option>
                    <option value="HTML"> HTML</option>
                    <option value="CSS"> CSS</option>
                    <option value="JS"> JS</option>
                    <option value="Golang"> Team Management</option>
                  </select>
                </div>
              </div>
            </div>
          </Card.Content>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Job ID</Table.HeaderCell>
                <Table.HeaderCell>Designation</Table.HeaderCell>
                <Table.HeaderCell>Company</Table.HeaderCell>
                <Table.HeaderCell>Industry</Table.HeaderCell>
                <Table.HeaderCell>Salary</Table.HeaderCell>
                <Table.HeaderCell>Skills Required</Table.HeaderCell>
                <Table.HeaderCell>Options</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {" "}
              {jobs &&
                jobs
                  .slice(
                    currentPage * rowsPerPage,
                    currentPage * rowsPerPage + rowsPerPage
                  )
                  .filter(
                    item =>
                      (parseFloat(item.salary.slice(1).replace(/,/g, "")) >
                      minSalary) && 
                     item.skills.includes(skillsfilter)
                  )
                  .map(item => (
                    <Table.Row>
                      <Table.Cell>{item?.id}</Table.Cell>
                      <Table.Cell>{item?.Title}</Table.Cell>
                      <Table.Cell>{item?.Company}</Table.Cell>
                      <Table.Cell>{item?.industry}</Table.Cell>
                      <Table.Cell>{item?.salary}</Table.Cell>
                      <Table.Cell>
                       
                      {item.skills}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          basic
                          color="green"
                          onClick={e => {
                            e.target.innerText = `Applied SuccessFully to job ${item.id}`;
                            e.target.disabled = true;
                          }}
                        >
                          Apply
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="7">
                  <Menu floated="right" pagination>
                    <Menu.Item
                      as="a"
                      onClick={() => {
                        if (currentPage !== 0) {
                          setFirstIndex(FirstIndex + indexPerPage);
                        }
                      }}
                      icon
                    >
                      <Icon name="chevron left" />
                    </Menu.Item>
                    {menuItems.map(item => item)}
                    <Menu.Item
                      as="a"
                      onClick={() => {
                        if (currentPage !== jobs.length - 1) {
                          setFirstIndex(FirstIndex + indexPerPage);
                          console.log(FirstIndex);
                        }
                      }}
                      icon
                    >
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Card>
      </div>
    </>
  );
}
