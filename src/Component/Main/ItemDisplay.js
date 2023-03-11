import { Button } from "react-bootstrap";
import classes from "./ItemDisplay.module.css";
const ItemDisplay = (props) => {
  return (
    <>
      <div className={classes.item} style={{ width: "18rem", height: "15rem" }}>
        <h3>{props.title}</h3>
        <div>
          <img src={props.imageUrl} alt={props.imageUrl} />
        </div>
        <div className={classes.t}>
          <div>₹{props.price} </div>
          <div>
            <Button
              variant="primary"
              as="input"
              type="submit"
              value="ADD TO CART"
              size="sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDisplay;
