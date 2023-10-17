import React, { useEffect, useState } from "react";
import Avatar from "/midora.svg";
import "../Styles/App.css";
import Profile from "./Profile.jsx";

function App() {
  const [avatarSrc, setAvatarSrc] = useState(Avatar);
  const [loading, setLoading] = useState(true);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleNavLinkClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  const fetchData = () => {
    fetch("https://api.lanyard.rest/v1/users/897838071922446466")
      .then((response) => response.json())
      .then((data) => {
        const avatarUrl = data.data?.discord_user?.avatar;
        if (avatarUrl) {
          setAvatarSrc(
            `https://cdn.discordapp.com/avatars/897838071922446466/${avatarUrl}?size=512`
          );
        }

        const discordStatus = data.data.discord_status;
        const picElement = document.querySelector(".pic");
        switch (discordStatus) {
          case "dnd":
            picElement.style.background = "#F04747";
            break;
          case "online":
            picElement.style.background = "#23A55A";
            break;
          case "idle":
            picElement.style.background = "#FAA61A";
            break;
          case "offline":
            picElement.style.background = "#747F8D";
            break;
          default:
            break;
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" id="home">
      <div className="maincontent">
        {loading && (
          <div className="overlay">
            <div className="spinner"></div>
          </div>
        )}
        <div className="navbar">
          <a onClick={() => handleNavLinkClick("profile")} className="nav-link">
            Profile
          </a>
          <a onClick={() => handleNavLinkClick("service")} className="nav-link">
            Service
          </a>
          <a href={`/blog`} className="nav-link">
            Blog
          </a>
        </div>
        <div className="profile-card">
          <div className="card-header">
            <div className="pic">
              <img src={avatarSrc} alt="avatar" id="avatar-img" />
            </div>
            <div className="name">
              <a
                href="https://discord.com/users/897838071922446466"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span className="m">m</span>
                <span className="i">i</span>
                <span className="d">d</span>
                <span className="o">o</span>
                <span className="r">r</span>
                <span className="a">a</span>#3234
              </a>
            </div>
            <div className="desc">
              Seft-taught <span className="programmer-text">Programmer</span>
            </div>
            <div className="sm">
              <a
                href="https://twitter.com/midoradev"
                class="fab fa-twitter"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="https://github.com/midoradev"
                class="fab fa-github"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="https://www.youtube.com/@midora28"
                class="fab fa-youtube"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="https://discord.gg/pVXYFzX58B"
                class="fab fa-discord"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="https://www.buymeacoffee.com/midora"
                class="fas fa-coffee"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Profile />
    </div>
  );
}

export default App;
