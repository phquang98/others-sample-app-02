import React, { FC } from "react";
import { Admin, Resource } from "react-admin";
import dontCareHeaderRestProvider from "ra-data-json-server";

import { ParticipantList as PartList } from "./components/Participant/ParticipantList";
import ParticipantCreate from "./components/Participant/ParticipantCreate";
import ParticipantEdit from "./components/Participant/ParticipantEdit";

// checking running lint staged
// testing
const asd = 1;

const App: FC = () => {
  const anotherProvider = dontCareHeaderRestProvider("http://localhost:10123");

  return (
    <Admin dataProvider={anotherProvider}>
      <Resource name="participants" list={PartList} create={ParticipantCreate} edit={ParticipantEdit} />
    </Admin>
  );
};

export default App;
