import Navbar from "../home/components/navbar/Navbar";
import Header from "../home/components/header/Header";
import Footer from "../home/components/footer/Footer";
import About from "../home/components/about/About";
import Tilt from "react-parallax-tilt";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Tilt
          glareEnable={false}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={2000}
          glareColor={"rgb(255,0,0)"}
        >
          <Header />
        </Tilt>

        <About />

        <Footer />
      </div>
    </>
  );
};

export default Home;
