import React, { FC } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

// const CustomTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.fullName}"` : ""}</span>;
// };

const ParticipantEdit: FC = (props) => {
  return (
    <Edit title="Editting ..." {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput disabled source="participantId" />
        <TextInput source="fullName" />
        <TextInput source="address" />
        <TextInput label="Change Grade" source="assignment1" />
        <TextInput label="Change Grade" source="assignment2" />
        <TextInput source="exam" />
      </SimpleForm>
    </Edit>
  );
};

export default ParticipantEdit;
