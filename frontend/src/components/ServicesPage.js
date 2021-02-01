import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../style.css";

export default class ServicesPage extends Component {
  state = {
    allData: {},
  };

  componentDidMount = () => {
    this.getAllData();
  };

  getAllData = () => {
    axios({ url: "/servicespage", method: "GET" })
      .then((response) => {
        const data = response.data;
        this.setState({ allData: data });
        console.log("data has been received");
      })
      .catch((error) => {
        console.log("Error Retriving data");
      });
  };

  displayData = (allData) => {
    if (allData != null) {
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
                  And I'm a{" "}
                  <span style={{ display: "inline-block" }}>
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
              {console.log(allData.servicesData)}
              {allData.servicesData.map((all, index) => (
                <>
                  <img
                    className={index % 2 == 0 ? "s1": "s2"}
                    src={all.image}
                    alt="image"
                  />
                  <h3 className={index % 2 == 0 ? "s1": "s2"}>{all.title}</h3>
                  <p className={index % 2 == 0 ? "s1": "s2"}>
                    {all.tagLine}
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
          <h1></h1>
        </>
      );
    }
  };
  render() {
    return <div>{this.displayData(this.state.allData.payload)}</div>;
  }
}
