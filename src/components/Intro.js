import React from "react";
import "./scss/Intro.scss";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__container container">
        <div className="intro__left">
          <h1>Hi,Im Kritik </h1>
          <h2> Full Stack Developer, Photographer</h2>
          <p>
            High level experience in backend and front end development
            knowledge, producing quality work
          </p>
        </div>
        <div className="intro__right">
          <img src="/images/background.png" alt="background" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
