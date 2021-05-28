import React from 'react';
import { Button,Icon } from "semantic-ui-react";

export function AddJobs() {
    return (
        
            <Button
                    color="black"
                      floated="left"
                      icon
                      labelPosition="left"
                      
                      size="small"
                    >
                     
                      <Icon name="envelope outline" /> Add Jobs
                    </Button>
       
    )
}
