import "./App.css";
import Nav from "./Components/Nav/Nav";
import Introduction from "./Components/Introduction/Introduction";
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="content_container">
        <Introduction></Introduction>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
