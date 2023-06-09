import Navbar from "../home/components/navbar/Navbar";
import Header from "../home/components/header/Header";
import Footer from "../home/components/footer/Footer";
import About from "../home/components/about/About";
import Posts from "../home/components/blogs/Posts";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Header />
        <About />
        <Posts />
        <Footer />
      </div>
    </>
  );
};

export default Home;
