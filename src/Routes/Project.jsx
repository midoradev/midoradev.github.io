import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import "../Style/Project.css";

function Project() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setTimeout(() => {
      const projectData = [
        {
          id: 1,
          name: "Starsky",
          body: "Best Vietnam Giveaways Discord Bot",
          html_url:
            "https://discord.com/api/oauth2/authorize?client_id=909386183107305504&permissions=8&scope=applications.commands%20bot",
        },
        {
          id: 2,
          name: "WordleBot",
          body: "Play Wordle on Discord",
          html_url:
            "https://discord.com/api/oauth2/authorize?client_id=909643400750448671&permissions=8&scope=applications.commands%20bot",
        },
      ];
      setProjects(projectData);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="Project">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <Navbar />
      <div className="project-list">
        <div className="project-cards">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.body}</p>{" "}
              {/* Add project description or other details */}
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Discord
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
