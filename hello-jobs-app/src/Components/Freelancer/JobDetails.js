import React, { useState, useEffect } from "react";
import history from "../../utils/history";
import Search from "./Search";
import { Button, Table, Rating } from "semantic-ui-react";
import { Icon, Message, Menu } from "semantic-ui-react";

function JobList() {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [indexPerPage, setIndexPerPage] = useState(4);
  const [FirstIndex, setFirstIndex] = useState(0);
  const [currentList, setCurrentList] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const interval = jobs.length / pageSize;
  const [menuItems, setMenuItems] = useState([]);
  let pagesButton = [],
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

  useEffect(() => {
   let newarr=[]
    for (let i = FirstIndex; i < FirstIndex+indexPerPage; i++) {
     
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
          <Table.Body>
            {" "}
            {jobs &&
              jobs
                .slice(
                  currentPage * rowsPerPage,
                  currentPage * rowsPerPage + rowsPerPage
                )
                .map(item => (
                  <Table.Row>
                    <Table.Cell>{item?.id}</Table.Cell>
                    <Table.Cell>{item?.Title}</Table.Cell>
                    <Table.Cell>{item?.Company}</Table.Cell>
                    <Table.Cell>{item?.industry}</Table.Cell>
                    <Table.Cell>{item?.salary}</Table.Cell>
                    <Table.Cell>
                      <Button
                        basic
                        color="green"
                        onClick={(e) => {
                         e.target.innerText = `Applied SuccessFully to job ${item.id}`
                         e.target.disabled=true;
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
              <Table.HeaderCell colSpan="6">
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
      </div>
    </>
  );
}

export default JobList;
