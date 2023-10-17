import { useRouteError } from "react-router-dom";
import "./Styles/index.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const page = {
    height: "100vh",
    backgroundColor: " #181818",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: " border-box",
    textAlign: "center",
  };
  setTimeout(() => {
    window.location.href = "/";
  }, 5000);
  return (
    <div id="error-page" style={page}>
      <div className="main">
        <h1 style={{ color: "white" }}>Oops!</h1>
        <p style={{ color: "white" }}>
          Sorry, an unexpected error has occurred.
        </p>
        <p style={{ color: "white" }}>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
