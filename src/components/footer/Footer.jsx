import css from "./footer.module.css";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.main_footer}>
        <div className={css.part1}>
          <h3 className={css.heading1}>seia secure iT solutions</h3>
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
          <p className={css.para2}>Jai Shree Ram</p>
          <p className={css.para2}>Jai Shree Ram</p>
          <p className={css.para2}>Jai Shree Ram</p>
          <p className={css.para2}>Jai Shree Ram</p>
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
          <p className={css.para4}>About Us</p>
          <p className={css.para4}>Contact Us</p>
          <p className={css.para4}>Email</p>
          <p className={css.para4}>Mobile No.</p>
        </div>
      </div>
      <p className={css.copyright}>Ant Bhala To Sab Bhala @ Mahakaal</p>
    </div>
  );
};

export default Footer;
