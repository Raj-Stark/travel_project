import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Destinations></Destinations>
      <Search></Search>
      <Gallary></Gallary>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
