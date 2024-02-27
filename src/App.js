import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./components/Home";
import SocialLinks from "./components/SocialLink";
import Experience from "./components/Experience";
import Portfolio from "./components/Portofolio";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Portfolio/>
      <Experience/>
      <Footer />
      <SocialLinks/>

    </div>
  );
}

export default App;