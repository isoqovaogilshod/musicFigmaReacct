import "./App.css";
import Box from "./components/Box/Box";
import Footer from "./components/Footer/Footer";
import Good from "./components/Good/Good";
import Header from "./components/Header/Header";
import Latest from "./components/Latest/Latest";
import Products from "./components/Products/Products";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Header />
      <Products />
      <Good />
      <Latest/>
      <Box/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
