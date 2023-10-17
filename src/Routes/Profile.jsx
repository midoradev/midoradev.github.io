import React, { useState } from "react";
import "../Styles/Profile.css"; // Import your CSS file for styling

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    const emailLink = `mailto:noreply.notmythdora@gmail.com?subject=Hello, I'm ${name} and my email is ${email}&body=${message}%0A%0A(Please do not delete or edit the title as it is the only way I can contact you. After reading this message, you can delete it.)`;
    window.open(emailLink, '_blank');
  };
  return (
    <div className="popup-profile" id="profile">
      <div className="profile-container">
        <div className="profile-content">
          <div className="about-card">
            <h2>
              <span style={{ color: "#ffcaca" }}>A</span>
              <span style={{ color: "#ffd7a6" }}>b</span>
              <span style={{ color: "#feffb8" }}>o</span>
              <span style={{ color: "#c4ffcb" }}>u</span>
              <span style={{ color: "#c8e5ff" }}>t</span>
            </h2>
            <p>
              Hello! I'm <span style={{ color: "#ffcaca" }}>m</span>
              <span style={{ color: "#ffd7a6" }}>i</span>
              <span style={{ color: "#feffb8" }}>d</span>
              <span style={{ color: "#c4ffcb" }}>o</span>
              <span style={{ color: "#c8e5ff" }}>r</span>
              <span style={{ color: "#cc99c9" }}>a</span>, a self-taught
              programmer from 🇻🇳 and a student from{" "}
              <span style={{ color: "#BE0E27" }}>Vin</span>
              <span style={{ color: "#EBAC22" }}>school</span>
            </p>
            <p>
              I have 2 years of experience in{" "}
              <span style={{ color: "#F0DC4E" }}>Javascript</span>,{" "}
              <span style={{ color: "#4FAA41" }}>MongoDB</span>,{" "}
              <span style={{ color: "#5865F2" }}>Discord.js</span>
            </p>
            <p>
              I also interested in AI (<span style={{ color: "#16A180" }}>ChatGPT</span>, Midjourney,...) and hacking
              tools (<span style={{ color: "#FF9211" }}>Flipper Zero</span>,...)
            </p>
            <p>
              In my free time, I usually play music, watch anime, and play games
            </p>
          </div>
          <div className="contact-card">
            <h2>
              <span style={{ color: "#cc99c9" }}>C</span>
              <span style={{ color: "#ffcaca" }}>o</span>
              <span style={{ color: "#ffd7a6" }}>n</span>
              <span style={{ color: "#feffb8" }}>t</span>
              <span style={{ color: "#c4ffcb" }}>a</span>
              <span style={{ color: "#c8e5ff" }}>c</span>
              <span style={{ color: "#cc99c9" }}>t</span>
            </h2>
            <p>
              Have a question, project idea, or just want to say hello? Feel
              free to get in touch with me!
            </p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="button" onClick={handleSendMessage}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
