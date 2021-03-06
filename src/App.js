import React from "react";

//Components and pages
import Home from "./pages/Home";
import Nav from "./components/nav";

import GlobalStyles from "./components/GlobalStyles";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
