import React from "react";

import "../style.css";

const CoursesPage = () => {
  return (
    <>
      {/* <!---scroll-up button---> */}
      <div className="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
      </div>
      {/* <!--navbar---> */}
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">
              Protfo<span>lio</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Courses</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Others</a>
            </li>
          </ul>
          <div className="menu-btn">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* <!--head section--> */}
      <section className="home" id="home">
      <div className="max-width">
          <div className="home-content">
            <div className="text-2">My Courses</div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span className="typing"></span>
            </div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span className="typing-2"></span>
            </div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span className="typing-3"></span>
            </div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span className="typing-4"></span>
            </div>
            <div className="text-3">Some of the Courses I have completed</div>
            <div className="text-3">
              <span className="typing-5"></span>
            </div>
            <a href="#">Get in touch</a>
          </div>
        </div>
      </section>
      {/* <!---Services section---> */}
      <section id="body_elements">
        <div className="subjects">
          <img
            className="s1"
            src="images/portfolioPic.PNG"
            alt="full stack web Development img"
          />
          <h3 className="s1">Full stack web developer</h3>
          <p className="s1">
            For who thoroughly her boy estimating conviction. Removed demands
            expense account in outward tedious do. Particular way thoroughly
            unaffected projection favourable mrs can projecting own. Thirty it
            matter enable become admire in giving. See resolved goodness
            felicity shy civility domestic had but. Drawings offended yet
            answered jennings perceive laughing six did far.
          </p>
          <img
            className="s2"
            src="images/businessEcommerse.PNG"
            alt="full stack web Development img"
          />
          <h3 className="s2">Software Development (Python)</h3>
          <p className="s2">
            For who thoroughly her boy estimating conviction. Removed demands
            expense account in outward tedious do. Particular way thoroughly
            unaffected projection favourable mrs can projecting own. Thirty it
            matter enable become admire in giving. See resolved goodness
            felicity shy civility domestic had but. Drawings offended yet
            answered jennings perceive laughing six did far.
          </p>
          <img
            className="s1"
            src="images/others.PNG"
            alt="full stack web Development img"
          />
          <h3 className="s1">Compitative Coding</h3>
          <p className="s1">
            For who thoroughly her boy estimating conviction. Removed demands
            expense account in outward tedious do. Particular way thoroughly
            unaffected projection favourable mrs can projecting own. Thirty it
            matter enable become admire in giving. See resolved goodness
            felicity shy civility domestic had but. Drawings offended yet
            answered jennings perceive laughing six did far.
          </p>
        </div>
      </section>
      {/* <!--footer section---> */}
      <footer>
        <a href="https://www.facebook.com/">
          <i class="social_icons facebook_logo fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i class="social_icons instagram_logo fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://twitter.com/">
          <i class="social_icons twiter_logo fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="https://www.gmail.com/">
          <i class="social_icons mail_logo fas fa-envelope fa-2x"></i>
        </a>
        <p>
          <span>
            Made with <span className="fas fa-heart heart"></span> by
            <a href="#">rupamsau_0010</a> |
            <span className="far fa-copyright"></span> 2021 All rights reserved.
          </span>
        </p>
      </footer>
    </>
  );
};

export default CoursesPage;
