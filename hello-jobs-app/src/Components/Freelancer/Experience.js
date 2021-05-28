import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

export function Experience() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className="card">
        <Card fluid header="Experience">
          <Card.Content header="Experience" />
          <Card.Content
            description="6.5 years of experience in Front End Development"
          />
          <Card.Content extra id="Experience">
          {isEditing && <Button
              onClick={e => {
                setIsEditing(false);
               e.target.parentElement.previousElementSibling.contentEditable = "false";
              }}
            >
              Save
            </Button>}
           {!isEditing &&  <Button
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

export default Experience;
