import { useState } from "react";
import "./footer.css";

function Footer() {
  const [suject, setSuject] = useState("");
  const [body, setBody] = useState("");
  const emailTo = "teste@teste.com";

  function send() {
    window.open(`mailto:${emailTo}?subject=${suject}&body=${body}`);
  }

  return (
    <div id="Footer" className="footer">
      <div className="contact_me">Contact Me</div>
      <div className="footer_container">
        <div className="inputs_container">
          <div className="form">
            <input
              className="input"
              type="text"
              placeholder="Suject*"
              value={suject}
              onChange={(e) => setSuject(e.target.value)}
              required
            ></input>
            <span className="input-border"></span>
          </div>
          <div className="form">
            <input
              className="input"
              type="text"
              placeholder="Body*"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></input>
            <span className="input-border"></span>
          </div>
        </div>
        <button
          className={
            body.length == 0 || suject.length == 0
              ? "btn_send disable"
              : "btn_send"
          }
          onClick={() => send()}
          disabled={body.length == 0 || suject.length == 0}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Footer;
