import Header from "../../components/header/Header";
import About from "../../components/about/About";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <About />
      </div>
    </>
  );
};

export default Home;
