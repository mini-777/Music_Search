import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        안녕하세요 react 를 공무하고 있는 <br></br>
        'Colin' 입니다</span>
    </div>
  );
}

export default About;
