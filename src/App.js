import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Services from "./components/Services";
import Actualites from "./components/Actualites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Services />
      <Actualites />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
