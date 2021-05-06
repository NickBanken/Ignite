import React from "react";
//Components and pages
import Home from "./pages/Homes";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Home />
    </div>
  );
}

export default App;
