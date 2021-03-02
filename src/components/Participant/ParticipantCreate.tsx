import React, { FC } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ParticipantCreate: FC = (props) => {
  return (
    <Create title="Creating new participant..." {...props}>
      <SimpleForm>
        <TextInput label="Participant ID" source="participantId" />
        <TextInput source="fullName" />
        <TextInput source="address" />
        <TextInput source="assignment1" />
        <TextInput source="assignment2" />
      </SimpleForm>
    </Create> //
  );
};

export default ParticipantCreate;
