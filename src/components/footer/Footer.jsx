import css from "./footer.module.css";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className={css.footer} id="contact-us">
      <div className={css.main_footer}>
        <div className={css.part1}>
          <h3 className={css.heading1}>SeiaSecure® IT Solutions</h3>
          <p className={css.para1}>
            Protecting Your Digital World with Comprehensive Cybersecurity
            Solutions
          </p>
          <div className={css.img_links}>
            <img src={fb} alt="" className={css.img1} />
            <img src={insta} alt="" className={css.img1} />
            <img src={twitter} alt="" className={css.img1} />
          </div>
        </div>
        <div className={css.part2}>
          <p className={css.heading2}>SERVICES</p>

          <Link
            to="services"
            activeClass="active"
            className={css.para2}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            real-time threat monitoring
          </Link>
          <Link
            to="services"
            activeClass="active"
            className={css.para2}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            proactive threat detection
          </Link>
          <Link
            to="services"
            activeClass="active"
            className={css.para2}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            blockchain security
          </Link>
          <Link
            to="services"
            activeClass="active"
            className={css.para2}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            expert security analysis
          </Link>
          <Link
            to="services"
            activeClass="active"
            className={css.para2}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            data privacy
          </Link>
        </div>
        <div className={css.part3}>
          <p className={css.heading3}>SUPPORT</p>
          <p className={css.para3}>Early threats detection</p>
          <p className={css.para3}>Security tools</p>
          <p className={css.para3}>24/7 monitoring</p>
          <p className={css.para3}>Increased efficiency</p>
          <p className={css.para3}>Enhanced visibility</p>
          <p className={css.para3}>Secure all time</p>
        </div>
        <div className={css.part4}>
          <p className={css.heading4}>COMPANY</p>
          <a
            href="tel:+91 8595932853"
            className={css.para4}
            style={{ textDecoration: "none", color: "#ffffff" }}>
            +91 8595932853
          </a>
          <a
            href="mailto:info@seiasecure.com"
            className={css.para4}
            style={{ textDecoration: "none", color: "#ffffff" }}>
            info@seiasecure.com{" "}
          </a>
          <p className={css.para4}>
            PKT - 11B, SEC. - 23, Rohini, New Delhi - 110085, INDIA
          </p>
        </div>
      </div>
      <p className={css.copyright}>
        All Rights Reserved. © Copyright 2023. SeiaSecure IT Solutions
      </p>
    </div>
  );
};

export default Footer;
