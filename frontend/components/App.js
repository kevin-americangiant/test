// App component
/*

Component that renders our Event List in a grid div along with a sticky header

*/

// IMPORTS

import React from "react";
import { EventList } from "./EventList";

// STATELESS FUNCTIONAL COMPONENT

export const App = () => [
  <div className="banner" key={1}>
    <h1 className="title">Asana Webhooks Explorer</h1>
  </div>,
  <div className="list" key={2}>
    <EventList />
  </div>
];