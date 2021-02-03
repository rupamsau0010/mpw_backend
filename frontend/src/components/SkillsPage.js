import React, { Component, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import Typewriter from "typewriter-effect";
import "../style.css";

export default class SkillsPage extends Component {
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
    axios({ url: "/skillspage", method: "GET" })
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
                <div className="text-2">My Services</div>
                <div className="text-3" style={{ display: "none" }}>
                  And I'm a <span className="typing"></span>
                </div>
                <div className="text-3" style={{ display: "none" }}>
                  And I'm a <span className="typing-2"></span>
                </div>
                <div className="text-3" style={{ display: "none" }}>
                  And I'm a <span className="typing-3"></span>
                </div>
                <div className="text-3">
                  I have hands on expreence on including
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
                <div className="text-3">
                  <span className="typing-4"></span>
                </div>
                <a href="#">Get in touch</a>
              </div>
            </div>
          </section>
          {/* <!---Services section---> */}
          <section id="body_elements">
            <div className="subjects">
              {allData.skillsData.map((allall, index) => (
                <>
                  <img
                    className={index % 2 == 0 ? "s1" : "s2"}
                    src={allall.image}
                    alt="full stack web Development img"
                  />
                  <h3 className={index % 2 == 0 ? "s1" : "s2"}>
                    {allall.title}
                  </h3>
                  <p className={index % 2 == 0 ? "s1" : "s2"}>
                    {allall.tagLine}
                  </p>
                </>
              ))}
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
