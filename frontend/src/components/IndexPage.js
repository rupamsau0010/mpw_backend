import React, { Component, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import Typewriter from "typewriter-effect";
import validator from "email-validator"
import "../style.css";

import pdf from "../pdfs/cv.pdf";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
    this.toggleSidenav = this.toggleSidenav.bind(this);
  }
  state = {
    allData: {},
    showHideSidenav: "hidden",
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    let emailResult = validator.validate(payload.email)
    let nameCheck = payload.name.split(" ").length

    if(emailResult && (nameCheck >= 2)) {
      axios({
        url: "/sendmessage",
        method: "POST",
        data: payload,
      })
        .then((resuly) => {
          console.log("Message sent succssfully");
          alert(
            "Thank you for connecting with me. I will definitely get back to you as soon as possible"
          );
        })
        .catch((err) => {
          console.log(err);
          alert("Internal server error. Try again")
        });
    } else {
      alert("Please Check your Full name and email and try again")
    }
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
    axios({ url: "/indexpage", method: "GET" })
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
          <div className="scroll-up-btn" onClick={this.scrollToTop}>
            <i class="fas fa-angle-up"></i>
          </div>
          <nav className="navbar">
            <div className="max-width">
              <div className="logo">
                <a href="#home">
                  Protfo<span>lio</span>
                </a>
              </div>
              <ul className={`menu ${showHideSidenav}`}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <Link to="/courses" class="" role="button">
                    <span>Courses</span>
                  </Link>
                </li>
                <li>
                  <a href="#contact">Contact</a>
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

          <section className="home" id="home">
            <div className="max-width">
              <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">{allData.name}</div>
                <div className="text-3">
                  And I'm a{" "}
                  <span style={{ display: "inline-block" }}>
                    <Typewriter
                      options={{
                        strings: ["Student", "Full-Stack Developer", "Data Science Enthusiast"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
                {/* <div className="text-3">And I'm a <span className="typing-3"></span></div>  */}
                <a href="#contact">Get in touch</a>
              </div>
            </div>
          </section>
          {/* <!---About Section---> */}
          <section className="about" id="about">
            <div className="max-width">
              <h2 className="title">About me</h2>
              <div className="about-content">
                <div className="column left">
                  <img src={allData.profileImg} alt="profile pic" />
                </div>
                <div className="column right">
                  <div className="text">
                    I'm Rupam and I am{" "}
                    <span style={{ display: "inline-block" }}>
                      <Typewriter
                        options={{
                          strings: ["Student", "Full-Stack Developer", "Data Science Enthusiast"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <p>{allData.aboutMe}</p>
                  <a href={pdf} target="_blank">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!--services section--> */}
          <section className="services" id="services">
            <div className="max-width">
              <h2 className="title">My services</h2>
              <div className="serv-content">
                {allData.services.map((allall, index) => (
                  <div className="card">
                    <div className="box">
                      <i class={allall.class}></i>
                      <div className="text">{allall.name}</div>
                      <p>{allall.tagLine}</p>
                      <Link to="/services" class="link" role="button">
                        <span>&nbsp;&nbsp;see more&nbsp;&nbsp;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* <!---Skils section start---> */}
          <section className="skills" id="skills">
            <div className="max-width">
              <h2 className="title">My skills</h2>
              <div className="skills-content">
                <div className="column left">
                  <div className="text">My skills and experience</div>
                  <p>{allData.skillsMain}</p>
                  <Link to="/skills" class="link" role="button">
                    <span>&nbsp;&nbsp;see more&nbsp;&nbsp;</span>
                  </Link>
                </div>
                <div className="column right">
                  <div className="bars">
                    <div className="info">
                       <span>NodeJs</span> {/* NodeJs === HTML */}
                      <span>90%</span>
                    </div>
                    <div className="line html"></div>
                  </div>
                  <div className="bars">
                    <div className="info">
                      <span>MongoDB</span>  {/* MongoDB === CSS */}
                      <span>90%</span>
                    </div>
                    <div className="line css"></div>
                  </div>
                  <div className="bars">
                    <div className="info">
                      <span>ReactJs</span>  {/* ReactJs === JavaScript */}
                      <span>80%</span>
                    </div>
                    <div className="line js"></div>
                  </div>
                  <div className="bars">
                    <div className="info">
                      <span>Python</span>  {/* Python === PHP */}
                      <span>85%</span>
                    </div>
                    <div className="line php"></div>
                  </div>
                  <div className="bars">
                    <div className="info">
                      <span>Java</span>  {/* Java === MySQL */}
                      <span>70%</span>
                    </div>
                    <div className="line mysql"></div>
                  </div> 
                </div>
              </div>
            </div>
          </section>

          {/* <!--contect section start---> */}
          <section className="contact" id="contact">
            <div className="max-width">
              <h2 className="title">Conteact me</h2>
              <div className="contact-content">
                <div className="column left">
                  <div className="text">Get in touch</div>
                  <p>{allData.contact.tagLine}</p>
                  <div className="icons">
                    <div className="row">
                      <i class="fas fa-user"></i>
                      <div className="info">
                        <div className="head">Full Name</div>
                        <div className="sub-title">{allData.contact.name}</div>
                      </div>
                    </div>
                    <div className="row">
                      <i class="fas fa-map-marker-alt"></i>
                      <div className="info">
                        <div className="head">Address</div>
                        <div className="sub-title">
                          {allData.contact.address}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <i class="fas fa-envelope"></i>
                      <div className="info">
                        <div className="head">Email</div>
                        <div className="sub-title">{allData.contact.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column right">
                  <div className="text">
                    <form className="#">
                      <div className="fields">
                        <div className="field name">
                          <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            required
                          />
                        </div>
                        <div className="field email">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          onChange={this.handleChange}
                          value={this.state.subject}
                          required
                        />
                      </div>
                      <div className="field textarea">
                        <textarea
                          cols="30"
                          rows="10"
                          placeholder="Describe project"
                          name="message"
                          onChange={this.handleChange}
                          value={this.state.message}
                          required
                        ></textarea>
                      </div>
                      <div className="button">
                        <button type="button" onClick={this.submit}>
                          Send message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
                <a href="https://github.com/rupamsau0010"> rupamsau_0010</a> | {" "}
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
            timeout={100000} //100 seconds max
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
