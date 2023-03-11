import { Button, Container, Navbar } from "react-bootstrap";
import classes from "./NavBar.module.css";
import CartButton from "./CartButton";

const NavBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <div className={classes.nav}>
            <Navbar.Brand>HOME</Navbar.Brand>
            <Navbar.Brand>STORE</Navbar.Brand>
            <Navbar.Brand>ABOUT</Navbar.Brand>
          </div>
          
          <CartButton onButtonpass = {props.onOpenButton}/>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
