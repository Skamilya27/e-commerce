import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import Header from "./Componet/Layout/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Cart from "./Componet/Cart/Cart";
import Footer from "./Componet/Layout/Footer";
import ContactUs from "./Pages/ContactUs";
import LoginForm from "./Pages/LoginPage";
import LoginContext from "./store/LoginContext";

function App() {
  const authCtx = useContext(LoginContext);
  const [showCart, setShowCart] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem("token"));

  const onShowCartHandler = () => {
    setShowCart(true);
  };

  const onHideCartHandler = () => {
    setShowCart(false);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setToken(null);
  // };

  return (
    <div>
      {showCart && <Cart show={showCart} onClose={onHideCartHandler}></Cart>}
      <Header onOpen={onShowCartHandler} ></Header>
      <Container>
        <React.Fragment>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/" exact>
            <Store />
          </Route>

          <Route path="/ContactUs">
            <ContactUs />
          </Route>

          {/* <Route path="/product/:productDetails">
            <ProductDetail />
          </Route> */}

          <Route path="/Login" exact>
            <LoginForm />
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
        </React.Fragment>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
