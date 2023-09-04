import React from "react";
import { Link, useLocation } from "react-router-dom";
import MetaData from "../components/layouts/MetaData/Metadata";
import "./Homepage.css";

function HomePage() {
  const location = useLocation();

  return (
    <>
      <MetaData title="ChatVibe | Home" />
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#">
            <div className="navbar-logo" style={{ color: "white" }}>
              ChatVibe
            </div>
          </Link>
          <div className="navbar-menu">
            <div className="navbar-item">
              {location.pathname === "/login"
                ? "Ready to ChatVibe? Let's Login"
                : "Join the ChatVibe community !"}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomePage;
