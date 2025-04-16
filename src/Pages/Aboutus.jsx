import React from "react";
import "../index.css";
import sec5div1img from "../imgs/sec5div1.png";

const Aboutus = () => {
  return (
    <div className="aboutusmaindiv">
      <div className="aboutuschilddiv">
        <p style={{ fontSize: "1.5rem" }}>
          {" "}
          <h1>About Us</h1> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          eligendi quod totam repellendus nobis veniam sunt deleniti recusandae.
          Odio earum modi architecto ipsa soluta possimus ad beatae numquam quis
          aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odio dicta incidunt id. Fuga, consectetur tempore minus voluptatem
          minima vitae earum, sapiente ab nulla eum nihil eos assumenda,
          voluptatum consequuntur pariatur? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nostrum reprehenderit consequatur
          aspernatur, saepe ipsa velit expedita voluptate perferendis
          consectetur, qui voluptatibus rem aperiam sapiente, quaerat omnis.
          Minima deserunt id consectetur! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Quod fuga odio nobis cupiditate delectus
          necessitatibus? Fugiat facere maxime incidunt ullam maiores iste
          laboriosam id deserunt nostrum omnis enim, quod quasi!
        </p>
      </div>

      <div className="aboutuschilddiv2">
        <p style={{ fontSize: "1.5rem" }}>
          {" "}
          <h1>our vision</h1> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          eligendi quod totam repellendus nobis veniam sunt deleniti recusandae.
          Odio earum modi architecto ipsa soluta possimus ad beatae numquam quis
          aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odio dicta incidunt id. Fuga, consectetur tempore minus voluptatem
          minima vitae earum, sapiente ab nulla eum nihil eos assumenda,
          voluptatum consequuntur pariatur? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Incidunt repellendus deserunt vitae
          aperiam neque assumenda minima eaque eius at doloribus nam iste
          impedit, dolorum animi maiores necessitatibus ipsum architecto
          expedita? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quae culpa excepturi voluptatibus ullam saepe natus consequatur
          similique doloribus aperiam eius quod, qui sequi possimus hic
          laudantium dolore, non praesentium architecto. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eum incidunt itaque, odit soluta
          natus delectus vel corrupti pariatur quos reiciendis temporibus, ipsa
          ea! Minima ab facilis corporis quo beatae placeat. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Aliquam quod commodi nemo
          adipisci voluptatem dolor at, laudantium illo? Repellat nemo corporis
          alias vitae itaque inventore fuga hic officia excepturi officiis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum odit
          quidem, accusamus quis id nulla, harum incidunt tempora, minima
          aliquid perferendis? Iste odit libero, repellendus perspiciatis
          deserunt minima laborum vero!
        </p>
      </div>

      <div style={{ marginTop: "6rem" }} className="footer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div className="footerheadings">About Us</div>
            <div className="footerele">
              Lorem ipsum dolor sit amet consectetur <br /> adipis distinctio ac
              harum perspiciatis non eius. <br /> harum perspiciatis non eius.
              harum perspiciatis <br /> non eius. perspiciatis non eius. <br />
              harum perspiciatis non eius. harum
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "7.7rem",
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
    </div>
  );
};

export default Aboutus;