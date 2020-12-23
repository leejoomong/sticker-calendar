import { useEffect, useState } from "react";
import "./App.css";
import { Container, Tab } from "semantic-ui-react";
import Calendar from "./Calendar";

function App() {
  const panes = [
    {
      menuItem: "Study 2 chapters of Kubernetes",
      render: () => (
        <Tab.Pane>
          <Calendar title={"Study 2 chapters of Kubernetes"} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Work in ABLANC",
      render: () => (
        <Tab.Pane>
          <Calendar title={"Work in ABLANC"} />
        </Tab.Pane>
      ),
    },
    { menuItem: "+", render: () => <Tab.Pane>NEW TAB</Tab.Pane> },
  ];

  return (
    <div className="App">
      <Container>
        <Tab
          className="App-body"
          panes={panes}
          menu={{ fluid: true, vertical: true }}
          menuPosition="left"
        />
      </Container>
    </div>
  );
}

export default App;
