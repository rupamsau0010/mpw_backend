import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../style.css";

const ServicesPage = () => {
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
              <Link to="/" class="" role="button">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/#about" class="" role="button">
                <span>About</span>
              </Link>
            </li>
            <li>
             <Link to="/services" class="" role="button">
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/skills" class="" role="button">
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/courses" class="" role="button">
                <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/#contact" class="" role="button">
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/others" class="" role="button">
                <span>Others</span>
              </Link>
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
            <div className="text-2">My Services</div>
            <div className="text-3">Most of my services are including</div>
            <div className="text-3">
              And I'm a {" "}
              <span style={{display: "inline-block"}}>
                <Typewriter
                  options={{
                    strings: ["Hello", "World"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <Link to="/#contact" class="" role="button">
              <span>Get in touch</span>
            </Link>
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
            Made with <span class="fas fa-heart heart"></span> by
            <a href="#">rupamsau_0010</a> |
            <span class="far fa-copyright"></span> 2021 All rights reserved.
          </span>
        </p>
      </footer>
    </>
  );
};

export default ServicesPage;
