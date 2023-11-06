import { useState } from "react";
import sushiIcon from "../assets/ball-svgrepo-com.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState("SushiRush");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div
        className="flex justify-around items-center h-24 w-full"
        style={{ backgroundColor: "#f0ebde0", boxShadow: "0 0 10px #c0bdb9" }}
      >
        <div className="flex justify-center items-center gap-3">
          <img src={sushiIcon} alt="Sushi" className="w-10"></img>
          <h1 className="text-3xl font-bold uppercase text-black">
            <span className="text-orange-500">Sushi</span>Rush
          </h1>
        </div>

        <nav className="flex justify-center items-center gap-8 text-black font-bold text-lg uppercase navbar">
          <Link
            to="/"
            className={`menu-item ${
              selectedSection === "SushiRush" ? "selected" : ""
            }`}
            onClick={() => handleSectionClick("SushiRush")}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`menu-item ${
              selectedSection === "Pedir Sushi" ? "selected" : ""
            }`}
            onClick={() => handleSectionClick("Pedir Sushi")}
          >
            Sushis
          </Link>
        </nav>
      </div>
    </>
  );
}
