import React, { Component, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import Typewriter from "typewriter-effect";
import "../style.css";

export default class OthersPage extends Component {
  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
    this.toggleSidenav = this.toggleSidenav.bind(this);
  }
  state = {
    allData: {},
    showHideSidenav: "hidden",
  };

  componentDidMount = () => {
    this.getAllData();

    // Jquery code
    $(window).on("scroll", function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }

      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  };

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  toggleSidenav() {
    var css = this.state.showHideSidenav === "hidden" ? "active" : "hidden";
    console.log(css);
    this.setState({ showHideSidenav: css });
  }

  getAllData = () => {
    axios({ url: "/otherspage", method: "GET" })
      .then((response) => {
        const data = response.data;
        this.setState({ allData: data });
        console.log("data has been received");
      })
      .catch((error) => {
        console.log("Error Retriving data");
      });
  };

  displayData = (allData, showHideSidenav) => {
    if (allData != null) {
      return (
        <>
          {/* <!---scroll-up button---> */}
          <div className="scroll-up-btn" onClick={this.scrollToTop}>
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
              <ul className={`menu ${showHideSidenav}`}>
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
              <div className="menu-btn" onClick={this.toggleSidenav}>
                <i class={`fas fa-bars ${showHideSidenav}`}></i>
              </div>
            </div>
          </nav>

          {/* <!--head section--> */}
          <section className="home" id="home">
            <div className="max-width">
              <div className="home-content">
                <div className="text-2">Others</div>
                <div className="text-3">
                  Some other details including
                  <span>
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
          {/* <!---Education section---> */}
          <section id="education" className="education">
            <div className="main-tag">
              <h1>Education</h1>
            </div>
            <div className="image">
              <img src="images/school.jpg" alt="school" />
            </div>
            <div className="sub-tag-content">
              {allData.educations.map((allall, index) => (
                <>
                  <div className="sub-tag">
                    <h3>{allall.class}</h3>
                  </div>
                  <div className="content">
                    <h4>
                      From <span>{allall.from}</span>
                    </h4>
                    <h4>
                      Score: <span>{allall.gread}</span>
                    </h4>
                  </div>
                </>
              ))}
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
              {allData.achievements.map((allall, index) => (
                <>
                  <div className="sub-tag">
                    <h3>{allall.name}</h3>
                  </div>
                  <div className="content">
                    <h4>
                      From <span>{allall.info}</span>
                    </h4>
                    <h4>
                      Score: <span>{allall.leader}</span>
                    </h4>
                  </div>
                </>
              ))}
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
              {allData.projects.map((allall, index) => (
                <>
                  <div className="sub-tag">
                    <h3>{allall.name}</h3>
                  </div>
                  <div className="content">
                    <h4>
                      From <span>{allall.info}</span>
                    </h4>
                    <h4>
                      Score: <span>{allall.leader}</span>
                    </h4>
                  </div>
                </>
              ))}
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
              {allData.hobbies.map((allall, index) => (
                <>
                  <div class="sub-tag">
                    <h3>{allall.typeOf}</h3>
                  </div>
                  <div className="content">
                    <h4>
                      Like{" "}
                      <span>
                        {allall.names}
                      </span>
                    </h4>
                  </div>
                </>
              ))}
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
                <span className="far fa-copyright"></span> 2021 All rights
                reserved.
              </span>
            </p>
          </footer>
        </>
      );
    } else {
      return (
        <>
          <Loader
            style={{ textAlign: "center", paddingTop: "5%" }}
            type="Puff"
            color="crimson"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        </>
      );
    }
  };
  render() {
    return (
      <div>
        {this.displayData(
          this.state.allData.payload,
          this.state.showHideSidenav
        )}
      </div>
    );
  }
}
