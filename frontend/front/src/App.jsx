import Header from "./components/Layout/Header/header";
import Footer from "./components/Layout/Footer/Footer";
import Policy from "./components/Layout/Policy/Policy";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import Products from "./components/Product/Products";
import "./App.css";
import Campaigns from "./components/campaigns/Campaigns";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
