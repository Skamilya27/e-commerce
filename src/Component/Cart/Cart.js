import Modal from "../../UI/Modal";
import CloseButton from "./CloseButton";
import Classes from "./Cart.module.css";
import { Card } from "react-bootstrap";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const ITemRemoveHandler = (event) => {
    event.target.parentNode.remove();
  };

  return (
    <Modal>
      <div>
        <CloseButton onClose={props.onCloseButton}></CloseButton>

        <Card>
          <Card.Title style={{ textAlign: "center" }}>
            <h1>CART</h1>
          </Card.Title>

          <Card.Header>
            <h5
              style={{
                display: "inline-block",
                margin: "auto 220px auto 10px",
              }}
            >
              ITEM
            </h5>

            <h5
              style={{ display: "inline-block", margin: "auto 27px auto 10px" }}
            >
              PRICE
            </h5>

            <h5
              style={{ display: "inline-block", margin: "auto 10px auto 20px" }}
            >
              QUANTITY
            </h5>
            <hr></hr>
          </Card.Header>

          {cartElements.map((item) => {
            return (
              <div>
                <Card.Body>
                  <Card className={Classes.card}>
                    <img src={item.imageUrl} alt="img" width="90px"></img>

                    <Card>
                      <b>
                        <span className={Classes.title}>{item.title}</span>
                      </b>
                    </Card>
                  </Card>

                  <b>
                    <span className={Classes.price}>{item.price}</span>
                    <span className={Classes.quantity}>{item.quantity} </span>
                  </b>
                  <Button
                    className={Classes.removeButton}
                    onClick={ITemRemoveHandler}
                    variant="danger"
                  >
                    REMOVE
                  </Button>
                </Card.Body>
                <hr></hr>
              </div>
            );
          })}
        </Card>

        <div style={{ margin: " 1rem auto auto 25rem ", textAlign: "center" }}>
          {" "}
          <span>
            <h5>TOTAL </h5>
            <span>220₹</span>
          </span>
        </div>
        <Button variant="info" style={{ margin: " 2rem auto auto 17rem " }}>
          PURCHASE
        </Button>
      </div>
    </Modal>
  );
};
