import React from "react";
import { Card, Button } from "semantic-ui-react";

function Projects() {
  return (
    <div className="card">
      <Card.Group>
        <Card fluid  header="Skills">
          <Card.Content header="Projects" />
          <table id="customers">
            <tr>
              <td>App for Employees</td>
            </tr>
            <tr>
              <td>Procurement</td>
            </tr>
            <tr>
              <td>HRMS IBM</td>
            </tr>
            <tr>
                <td><Button basic color='green'>Add Git Hub Projects</Button></td>
              </tr>
          </table>
        </Card>
      </Card.Group>
    </div>
  );
}

export default Projects;
