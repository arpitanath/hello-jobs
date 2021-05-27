import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

function About() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className="card">
        <Card fluid header="Summary">
          <Card.Content header="Summary" />
          <Card.Content
            description="Software developer having 6+ years of experience in developing and managing front end applications.
Started my career with SAP's Webdynpro Java which is used in SAP Enterprise Portal. As a part of the application support and enhancements team in the first project, I worked on providing day to day production support for their SAP Enterprise Portal app for end users working in 156 countries.
My work also involved handling various change requests raised by users as well as conceptualising,
requirement gathering and development work for applications running on SAP portal.Aspiring to become a Full stack Developer"
          />
          <Card.Content extra id="summary">
          {isEditing && <Button
              basic
              color="green"
              onClick={e => {
                setIsEditing(false);
               e.target.parentElement.previousElementSibling.contentEditable = "false";
              }}
            >
              Save
            </Button>}
           {!isEditing &&  <Button
              basic
              color="green"
              onClick={e => {
                setIsEditing(true);
               e.target.parentElement.previousElementSibling.contentEditable = "true";
              }}
            >
              Edit
            </Button>}
          </Card.Content>
        </Card>
      </div>
    </>
  );
}

export default About;
