import React from 'react';
import "./Work.css";
import digitalNomad from "../../images/digitalNomad.png";
import fantasy from "../../images/fantacyBall.png"
import noteTaker from "../../images/noteTaker.png"
import password from "../../images/password.png";
// import VisualLabtop from "../../Visual.jpeg ";



export default function Blog() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
          <img src={digitalNomad} />
          <div class="card-body">
            <h5 class="card-title">Digital Nomad</h5>
            <p class="card-text">
              With this grand life change often comes the desire to relocate.
              Not just that, but a life of "digital nomadism" slowly represents
              a new reality for scores of tech workers. Users are now able to
              quickly and efficiently compare salaries and quality of life
              information accross a plethora of global markets.
            </p>
            <a
              href="https://fregosoj.github.io/Bootcamp-Goal/"
              class="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Digital Nomad Link
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src={fantasy}
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div class="card-body">
            <h5 class="card-title">UCLA fantasy-Leage</h5>
            <p class="card-text">
              A metro app that allows users to save their trips using the
              Washington D.C. metro data
            </p>
            <a
              href="https://github.com/wvoigt722/uclaFantasyLeague"
              class="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              3on3 Fantasy B-Ball Link
            </a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={noteTaker} class="card-img-top" alt="Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title">Readme Generator</h5>
            <p class="card-text">
              Easy command prompt Readme generator that allows to input items
              into a readme.
            </p>
            <a
              href="https://github.com/FregosoJ/takeNotes"
              class="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Note-Taker Link
            </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src={password} class="card-img-top" alt="Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title">Readme Generator</h5>
            <p class="card-text">
              Easy command prompt Readme generator that allows to input items
              into a readme.
            </p>
            <a
              href="https://fregosoj.github.io/passwordgen/"
              class="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Password-Gen Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}