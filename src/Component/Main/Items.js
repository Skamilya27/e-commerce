import classes from "./Items.module.css";
import ItemDisplay from "./ItemDisplay";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Items = () => {
  const Items = productsArr.map((item) => (
    <ItemDisplay
      id={item.id}
      key={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    ></ItemDisplay>
  ));
  return (
    <>
      <h1 className={classes.h1}>MUSIC</h1>
      <ul>{Items}</ul>
    </>
  );
};

export default Items;
