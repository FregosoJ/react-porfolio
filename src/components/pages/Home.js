import React from "react";
import "../Home.css";
import profileImage from "../../images/IMG_0019.jpeg";

export default function Home() {
  return (
    <div>
      <h1 className="home">Jonathan Fregoso</h1>
      <div class="card">
        <div className="greeting">
          <div class="cardTitle">Hello Welcome to My profile</div>
        </div>
        <div className="picture">
          <img src={profileImage} />
        </div>
      </div>
      <p className="JF">Lets get coding</p>
      <div class="card"></div>
    </div>
  );
}
