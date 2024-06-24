import "./aboutme.css";

function AboutMe() {
  return (
    <div id="About">
      <div className="content">
        <div className="about_container">
          <div className="content_tab">/ about me</div>
          <div className="about_inner_content">
            <div className="aboutMe-text">
              I am a Software Development Engineer at Collab, working in the
              Professional Services Team. I have a Bachelor's degree in Computer
              Software Engineering & Multimedia at University of ISEL. Here are
              some technologies I have been working with: Typescript Python
              React.js Java Javascript C# Outside of work, I'm interested in
              following the developments of science. I also play a lot of video
              games and create applications for fun.
            </div>
            <div className="img_border">
              <img src="https://github.com/MiguelMMatos/portofolio/blob/main/src/background/image.png?raw=true"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
