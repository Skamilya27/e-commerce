import Container from "react-bootstrap/Container";
import { Button, Navbar } from "react-bootstrap";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <div className={classes.nav}>
            <Navbar.Brand>HOME </Navbar.Brand>
            <Navbar.Brand>STORE </Navbar.Brand>
            <Navbar.Brand>ABOUT </Navbar.Brand>
          </div>
          <Button
            variant="dark"
            style={{
              fontSize: "14px",
              border: "3px solid skyblue",
            }}
            type="click"
          >
            Cart
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
