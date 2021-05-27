import React, { useState, useEffect } from "react";
import history from "../../utils/history";
import Search from "./Search";
import { Button, Table, Rating } from "semantic-ui-react";
import { Icon, Label, Menu } from "semantic-ui-react";

function JobList() {
  const pageSize = 5;
  const [currentList, setCurrentList] = useState([]);
  const [interval, setInterval] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const intervals = jobs.length / pageSize;
  let rows = [],
    pagesButton = [],
    newArr = [];

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

  function getCurrentList() {
    newArr = [];
    for (let i = pageIndex; i < pageSize; i++) {
      newArr.push(jobs[i]);
    }
  }

  

  function getRows() {
    rows = [];
    getCurrentList();
    newArr?.map(item => {
      rows.push(
        <Table.Row>
          <Table.Cell>{item?.id}</Table.Cell>
          <Table.Cell>{item?.Title}</Table.Cell>
          <Table.Cell>{item?.Company}</Table.Cell>
          <Table.Cell>{item?.industry}</Table.Cell>
          <Table.Cell>{item?.salary}</Table.Cell>
          <Table.Cell>
            <Button basic color="green">
              Apply
            </Button>
          </Table.Cell>
        </Table.Row>
      );
    });
  }
  getRows();

  return (
    <>
      <div class="search">
        <Search />
      </div>
      <div class="job-list">
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Job ID</Table.HeaderCell>
              <Table.HeaderCell>Designation</Table.HeaderCell>
              <Table.HeaderCell>Company</Table.HeaderCell>
              <Table.HeaderCell>Industry</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </>
  );
}

export default JobList;
