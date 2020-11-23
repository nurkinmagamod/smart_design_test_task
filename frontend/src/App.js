import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { CreateProducts } from "./pages/CreateProducts";

const App = () => {
  const [qeury, setQeury] = useState("");
  function handleChange(newValue) {
    setQeury(newValue);
  }
  return (
    <Router>
      <Header qeury={qeury} onChange={handleChange} />
      <main>
        <Container>
          <Route path="/create" component={CreateProducts} exact />
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} query={qeury} />}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
