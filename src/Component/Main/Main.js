import classes from "./Main.module.css";
import Button from "react-bootstrap/Button";
import Items from "./Items";
import Card from "react-bootstrap/Card";
const Main = () => {
  return (
    <>
      <Card.Body className={classes.cardbody}>
        <span>The Generics</span>
      </Card.Body>
      <Items />
      <div style={{ color: "skyblue", textAlign: "center" }}>
        <Button
          variant="secondary"
          style={{
            width: "200px",
            fontSize: "20px",
            color: "skyblue",
            textAlign: "center",
          }}
        >
          See the cart
        </Button>
      </div>
    </>
  );
};

export default Main;
