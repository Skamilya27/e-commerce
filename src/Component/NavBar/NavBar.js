import { Button, Container, Navbar } from "react-bootstrap";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <div className={classes.nav}>
            <Navbar.Brand>HOME</Navbar.Brand>
            <Navbar.Brand>STORE</Navbar.Brand>
            <Navbar.Brand>ABOUT</Navbar.Brand>
          </div>
          <Button
            variant="dark"
            style={{
              border: "1px solid skyblue",
            }}
            type="click"
          >
            Cart
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
