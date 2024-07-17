import About from "../components/About";
import PersonalDetails from "../components/Contact";
import Education from "../components/Education";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="home">
          <Header />  
          <Hero />
          <About />
          <Skills/>
          <Projects/>
          <Education/>
          <PersonalDetails/>
        </div>
      </div>
    </>
  );
};
export default Home;
