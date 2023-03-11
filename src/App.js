import "./App.css";
import Items from "./Component/Body/Items";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/NavBar/Header";
import NavBar from "./Component/NavBar/NavBar";

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
]

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Items Item={productsArr} />
      <Footer />
    </>
  );
}

export default App;
