import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../Style/Terms.css";

function Refunds() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/midoradev/midoradev.github.io/main/public/Markdown/RefundsPolicy.md"
    )
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data));
  }, []);
  return (
    <div className="Document">
      <div className="DocumentContent">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Refunds;