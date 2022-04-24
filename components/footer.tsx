import Image from "next/image";
import { useState } from "react";
import arrowUp from "../public/svg/arrow-up.svg";
import facebook from "../public/svg/social1.svg";
import instagram from "../public/svg/social2.svg";
import send from "../public/svg/send.svg";
import skype from "../public/svg/social3.svg";
import twitter from "../public/svg/social4.svg";

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState("info@gmail.com");
  return (
    <footer>
      <div className="footer-company">
        <div>
          <h1>
            <span className="highlight">Omnified</span>
            <br />
            Connections
          </h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
            laoreet libero dis eget maecenas bibendum.
          </h6>
          <div className="icons">
            <Image alt="facebook" src={facebook} width={80} height={80}></Image>
            <Image alt="instagram" src={instagram} width={80} height={80}></Image>
            <Image alt="twitter" src={twitter} width={80} height={80}></Image>
            <Image alt="skype" src={skype} width={80} height={80}></Image>
          </div>
        </div>
        <div>
          <h1>Company</h1>
          <a href="#">About Us</a>
          <a href="#">Our Work</a>
          <a href="#">Client</a>
          <a href="#">Our Blog</a>
          <a href="#">Contact US</a>
        </div>
        <div>
          <h1>Sevices</h1>
          <a href="#">Graphic Design</a>
          <a href="#">UI/UX Design</a>
          <a href="#">Web Development</a>
          <a href="#">App Development</a>
          <a href="#">Web Hosting</a>
        </div>
        <div>
          <h1>Newsletter</h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
            varius viverra in.
          </h6>
          <div className="newsletter-input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>
              <Image alt="none" src={send}></Image>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          © Copyright 2022. All Right Reserved By Omnified Connections Pvt. Ltd.
        </p>
        <a href="#">
          <Image alt="arrow-up" src={arrowUp}></Image>
        </a>
      </div>
    </footer>
  );
}
