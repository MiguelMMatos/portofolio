import "./App.css";
import Nav from "./Components/Nav/Nav";
import Introduction from "./Components/Introduction/Introduction";
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Background from "./Components/Background/Background";

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
        </div>
      </div>
    </>
  );
}

export default App;
