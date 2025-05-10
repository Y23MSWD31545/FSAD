import React from "react";
import sec1img from "../imgs/sec1img.png";
import Card1 from "../componens/Card1.jsx";
import div2img from "../imgs/div2img.png";
import sec3img from "../imgs/sec3img.png";
import sec4img from "../imgs/sec4img.webp";
import sec5div1 from "../imgs/sec5div1.png";
import Card2 from "../componens/Servicecard";

const Homepage = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${sec1img})` }}
        className="Homepage"
      >
        <div className="homediv1">
          <button>Book A Car</button>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1>How it works</h1>
        </div>

        <div>
          <div
            style={{ backgroundImage: `URL(${div2img})` }}
            className="howitworks"
          >
            <div className="howitworkscards">
              {" "}
              <Card1
                top={<ion-icon name="location"></ion-icon>}
                bottom={"choose your location"}
                end={
                  "Lorem sit am olore nemo a, volup ero fugit mollitia, sequi nam"
                }
              />{" "}
            </div>
            <div className="howitworkscards">
              {" "}
              <Card1
                top={<ion-icon name="calendar"></ion-icon>}
                bottom={"Pick A Date"}
                end={
                  "Lorem sit am olore nemo a, volup ero fugit mollitia, sequi nam"
                }
              />{" "}
            </div>
            <div className="howitworkscards">
              {" "}
              <Card1
                top={<ion-icon name="car"></ion-icon>}
                bottom={"Book Your Ride"}
                end={
                  "Lorem sit am olore nemo a, volup ero fugit mollitia, sequi nam"
                }
              />{" "}
            </div>
          </div>
        </div>

        <div className="ourservices">
          <div>
            <img src={sec3img} alt="" />
          </div>
          <div className="">
            <div>
              {" "}
              <h1>Best Services</h1>
            </div>
            <div>
              {" "}
              <h2>Feel The Best Experience Along With Our Rental Deals</h2>{" "}
            </div>
            <div>
              <div className="sec3divchilds">
                <div className="logos">
                  <ion-icon name="pricetag"></ion-icon>{" "}
                </div>
                <div
                  style={{
                    paddingTop: "1.2rem",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }}
                >
                  <div className="logosheadings">Deals For Every Budget</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat quam atque nulla praesentium ad tenetur, ipsa eos,
                  </div>
                </div>
              </div>
              <div className="sec3divchilds">
                <div className="logos">
                  <ion-icon name="pricetag"></ion-icon>{" "}
                </div>
                <div
                  style={{
                    paddingTop: "1.2rem",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }}
                >
                  <div className="logosheadings">Deals For Every Budget</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat quam atque nulla praesentium ad tenetur, ipsa eos,
                  </div>
                </div>
              </div>

              <div className="sec3divchilds">
                <div className="logos">
                  <ion-icon name="pricetag"></ion-icon>{" "}
                </div>
                <div
                  style={{
                    paddingTop: "1.2rem",
                    textAlign: "left",
                    paddingLeft: "1rem",
                  }}
                >
                  <div className="logosheadings">Deals For Every Budget</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat quam atque nulla praesentium ad tenetur, ipsa eos,
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec4div1">
          <div>
            <div>
              {" "}
              <h1>Premimum Cars</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat quis, dolorem odit porro molestias Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Minus necessitatibus
                quibusdam, perferendis saepe eveniet, a at maxime officia
                ratione soluta cumque minima expedita, illo dignissimos
                repellendus voluptatem inventore debitis sint.
              </p>
            </div>
            <div>
              <button style={{ margin: "1rem", marginTop: "3rem" }}>
                See all cars
              </button>
            </div>
          </div>
          <div>
            <img style={{ width: "45rem" }} src={sec4img} alt="" />
          </div>
        </div>
        <div className="forall">
          <div className="sec4childs">
            300+ <br /> Proffesional drivers
          </div>
          <div className="sec4childs">
            1000+ <br />
            Happy Customers
          </div>
          <div className="sec4childs">
            500+ <br /> Customers Feedback
          </div>
        </div>
        <div
          className="sec5div1"
          style={{
            backgroundImage: `URL(${sec5div1})`,
          }}
        >
          <div>
            <h1>Select Your PickUp Car Today</h1>
            <span style={{ marginTop: "5rem" }} className="sec5btn">
              select you car
            </span>
          </div>
        </div>

        <div className="sec6div1">
          <div className="sec6head">Our Services</div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className="sec6body">
              <Card2
                upper={
                  <span className="icon">
                    <ion-icon name="person"></ion-icon>
                  </span>
                }
                middle={"Pick Up And Drop Off"}
                last={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat enim, quod doloribus molestias veritatis vero explicabo perferendis perspiciatis!"
                }
              />
            </div>

            <div className="sec6body">
              <Card2
                upper={
                  <span className="icon">
                    <ion-icon name="car-sport"></ion-icon>
                  </span>
                }
                middle={"Intra State Journey"}
                last={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat enim, quod doloribus molestias veritatis vero explicabo perferendis perspiciatis!"
                }
              />
            </div>

            <div className="sec6body">
              <Card2
                upper={
                  <span className="icon">
                    <ion-icon name="people-circle"></ion-icon>
                  </span>
                }
                middle={"All Escort Services"}
                last={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat enim, quod doloribus molestias veritatis vero explicabo perferendis perspiciatis!"
                }
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <div className="footerheadings">About Us</div>
              <div className="footerele">
                Lorem ipsum dolor sit amet consectetur <br /> adipis distinctio
                ac harum perspiciatis non eius. <br /> harum perspiciatis non
                eius. harum perspiciatis <br /> non eius. perspiciatis non eius.{" "}
                <br />
                harum perspiciatis non eius. harum
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "7.5rem",
                  paddingTop: "2rem",
                  color: "#fff",
                  fontSize: "2rem",
                }}
              >
                <ion-icon name="logo-facebook"></ion-icon>{" "}
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
              </div>
            </div>
            <div>
              <div className="footerheadings">Quick Links</div>
              <div className="footerele">Book A Ride</div>
              <div className="footerele">Become A driver</div>
              <div className="footerele">Our Services</div>
              <div className="footerele">About Us</div>
              <div className="footerele">Contact Us</div>
            </div>
            <div>
              <div className="footerheadings">Product</div>
              <div className="footerele">My Account </div>
              <div className="footerele">Blog</div>
              <div className="footerele">Invest Your Car</div>
              <div className="footerele">Become A Partner</div>
              <div className="footerele">FAQ</div>
            </div>
            <div>
              <img
                style={{
                  width: "10rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "2rem",
                  borderRadius: "13px",
                }}
                src="https://media.istockphoto.com/id/1147099395/vector/car-icon-vector.jpg?s=612x612&w=0&k=20&c=qWxJ9r5yL8xOdlU9s2LyX-pWZ0tP_khynf0VhQwG4eg="
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
