import "./App.css";
import Nav from "./Components/Nav/Nav";
import Introduction from "./Components/Introduction/Introduction";
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Background from "./Components/Background/Background";
import Icons from "./Components/Icons/Icons";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Background></Background>
      <Nav></Nav>
      <div className="content_container">
        <div className="introduction_background">
          <div className="background"></div>
        </div>
        <Introduction></Introduction>
        <div className="contents_container">
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Projects></Projects>
          <Skills></Skills>
          <Footer></Footer>
          <Icons></Icons>
        </div>
      </div>
    </>
  );
}

export default App;
