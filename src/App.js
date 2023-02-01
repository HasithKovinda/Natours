import Account from "./components/Account/Account";
import About from "./components/TourOverView/About";
import Footer from "./components/TourOverView/Footer";
import Hero from "./components/TourOverView/Hero";
import Navbar from "./components/TourOverView/Navbar";
import Services from "./components/TourOverView/Services";
import Tours from "./components/TourOverView/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Account />
      {/* <Hero />
      <About />
      <Services />
      <Tours />
      <Footer /> */}
      <Footer />
    </>
  );
}

export default App;
