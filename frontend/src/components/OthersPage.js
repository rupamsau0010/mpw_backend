import React from "react";

import "../style.css";

const OthersPage = () => {
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
            <div className="text-2">Others</div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span class="typing"></span>
            </div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span class="typing-2"></span>
            </div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span class="typing-3"></span>
            </div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span class="typing-4"></span>
            </div>
            <div className="text-3" style={{ display: "none" }}>
              And I'm a <span class="typing-5"></span>
            </div>
            <div className="text-3">Some other details including</div>
            <div className="text-3">
              <span className="typing-6"></span>
            </div>
            <a href="#">Get in touch</a>
          </div>
        </div>
      </section>
      {/* <!---Education section---> */}
      <section id="education" className="education">
        <div className="main-tag">
          <h1>Education</h1>
        </div>
        <div className="image">
          <img src="images/school.jpg" alt="school" />
        </div>
        <div className="sub-tag-content">
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
        </div>
      </section>
      {/* <!--Education section---> */}
      {/* <!---Achivement section---> */}
      <section id="achievement" className="achievement">
        <div className="main-tag">
          <h1>Achievement</h1>
        </div>
        <div className="image">
          <img src="images/achievement.jpg" alt="achievement" />
        </div>
        <div className="sub-tag-content">
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
        </div>
      </section>
      {/* <!--Achivements section---> */}
      {/* <!---Projects section---> */}
      <section id="project" className="project">
        <div className="main-tag">
          <h1>Projects</h1>
        </div>
        <div className="image">
          <img src="images/project.jpg" alt="projects" />
        </div>
        <div className="sub-tag-content">
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
        </div>
      </section>
      {/* <!---Hobbies section---> */}
      <section id="hobby" className="hobby">
        <div className="main-tag">
          <h1>Achievement</h1>
        </div>
        <div className="image">
          <img src="images/hobby.jpg" alt="achievement" />
        </div>
        <div className="sub-tag-content">
          <div class="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
          <div className="sub-tag">
            <h3>10th Class</h3>
          </div>
          <div className="content">
            <h4>
              From{" "}
              <span>Contai Model Institution, Contai, Purba Medinipur.</span>
            </h4>
            <h4>
              Score: <span>91.5%</span>
            </h4>
          </div>
        </div>
      </section>
      {/* <!---Hobbies section---> */}
      {/* <!---footer section---> */}
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
            <span className="far fa-copyright"></span> 2021 All rights reserved.
          </span>
        </p>
      </footer>
    </>
  );
};

export default OthersPage;
