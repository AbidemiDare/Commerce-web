import Feature from "./components/features/feature";
import Footer from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/nav/navbar";
import News from "./components/news/news";
import { Product } from "./components/products/product";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Feature />
      <News />
      <Footer />
    </>
  );
}

export default App;
