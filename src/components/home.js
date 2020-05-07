import React from "react";
import PCover from "../../assets/p_cover.svg";
import "../styles/home.css";
const home = () => {
  return (
    <div id="home" className="text-center">
      <PCover id="p_cover" />
      <div id="header_text" className="text-center">
        <h1>Hi! I'm Somoy.</h1>
        <br />
        <h2>a full-stack developer.</h2>
      </div>
    </div>
  );
};
export default home;
