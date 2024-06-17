import "./nav.css";

function Nav() {
  return (
    <div id="Nav">
      <div className="nav_container">
        <div className="nav_buttons">
          <a href="#Introduction" className="border_anim">
            <button>Home</button>
          </a>
          <a href="#About" className="border_anim">
            <button>About</button>
          </a>
          <a href="#Experience" className="border_anim">
            <button>Experience</button>
          </a>
          <a href="#Projects" className="border_anim">
            <button>Projects</button>
          </a>
          <a href="#Skills" className="border_anim">
            <button>Skills</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
