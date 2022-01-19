import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Shared/Header";
import Container from "./Components/Shared/Container";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Impact from "./Pages/Impact";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/impact">
            <Impact />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/*" />
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
