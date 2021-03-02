import React, { FC } from "react";
import { Filter, ReferenceInput, SelectInput, TextInput } from "react-admin";

// const CustomTitle = ({ record }) => {
//   return <span>Post {record ? `"${record.fullName}"` : ""}</span>;
// };

const ParticipantFilter: FC = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search participant name" source="fullName" alwaysOn />
    </Filter>
  );
};

export default ParticipantFilter;
