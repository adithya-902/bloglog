import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Header />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Home;
