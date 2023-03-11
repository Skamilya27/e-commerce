import { Card } from "react-bootstrap";
import classes from "./Footer.module.css";
import facebook from "../Assets/facebook.png";
import youtube from "../Assets/youtube.png";
import spotify from "../Assets/spotify.png";
const Footer = () => {
  return (
    <Card>
      <Card.Body className={classes.footer1}>
        <footer>
          <h1 className={classes.footer2}>The Generics</h1>
          <span className={classes.img}>
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="youtube" width="30" height="30" />
            </a>
            <a href="https://open.spotify.com/">
              <img src={spotify} alt="spotify" width="30" height="30" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" width="30" height="30" />
            </a>{" "}
          </span>
        </footer>
      </Card.Body>
    </Card>
  );
};
export default Footer;
