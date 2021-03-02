import React, { FC } from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

import ParticipantFilter from "./ParticipantFilter";

export const ParticipantList: FC = (props) => {
  return (
    <List filters={<ParticipantFilter />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="participantId" />
        <TextField source="fullName" />
        <TextField source="address" />
        <TextField source="assignment1" />
        <TextField source="assignment2" />
        <TextField source="exam" />
        <EditButton basePath="/participants" />
        <DeleteButton basePath="/participants" />
      </Datagrid>
    </List>
  );
};
