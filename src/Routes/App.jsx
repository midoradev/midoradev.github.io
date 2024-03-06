import { useEffect, useState } from "react";
import Avatar from "/midora.svg";
import "../Styles/App.css";

function App() {
  const [avatarSrc, setAvatarSrc] = useState(Avatar);
  const [loading, setLoading] = useState(true);

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
        <div className="profile-card">
          <div className="card-header">
            <div className="card">
              {" "}
              <div className="pic">
                <img src={avatarSrc} alt="avatar" id="avatar-img" />
              </div>
              <div className="card2">
                <div className="name">
                  <a
                    href="https://discord.com/users/897838071922446466"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <span style={{ color: "#ffcaca" }}>m</span>
                    <span style={{ color: "#ffd7a6" }}>i</span>
                    <span style={{ color: "#feffb8" }}>d</span>
                    <span style={{ color: "#c4ffcb" }}>o</span>
                    <span style={{ color: "#c8e5ff" }}>r</span>
                    <span style={{ color: "#cc99c9" }}>a</span>
                    <span style={{ color: "#fff" }}>#3234</span>
                  </a>
                </div>
                <div className="desc">
                  Seft-taught{" "}
                  <span style={{ color: "#be97c2" }}>Programmer</span>
                </div>
              </div>
            </div>

            <div className="sm">
              <a
                href="https://twitter.com/midoradev"
                className="fab fa-twitter"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="https://github.com/midoradev"
                className="fab fa-github"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="https://www.youtube.com/@midora28"
                className="fab fa-youtube"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="https://discord.gg/pVXYFzX58B"
                className="fab fa-discord"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="https://www.buymeacoffee.com/midora"
                className="fas fa-coffee"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
              <a
                href="mailto:noreply.notmythdora@gmail.com"
                className="fa-solid fa-envelope"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
