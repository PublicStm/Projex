import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";
import Backlog from "./components/Backlog";
import Board from "./components/Board";
import { useState } from "react";
import { diGetAllProjects } from "./data/dataInterface";
import theme from "./styles/AppStyles";
import { useEffect } from "react";

function App() {
  const [allProjects, setAllProjects] = useState(diGetAllProjects());
  const [currentProject, setCurrentProject] = useState(allProjects[0]);

  useEffect(() => {
    diGetAllProjects();
    /// TODO: this call has to be delayed once the real data request is implemented because of the asynchness.
    setCurrentProject(allProjects[0]);
  }, []);  

  const updateCurrentProject = (event) => {
    const project = allProjects.filter(
      (project) => project.id === event.target.value
    );
    if (project[0]) setCurrentProject(project[0]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              Start Page
            </Route>
            <Route path="/backlog">
              <Backlog
                allProjects={allProjects}
                currentProject={currentProject}
                setCurrentProject={updateCurrentProject}
              />
            </Route>
            <Route path="/board">
              <Board />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
