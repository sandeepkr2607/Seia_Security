import css from "./footer.module.css";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.main_footer}>
        <div className={css.part1}>
          <h3 className={css.heading1}>SEIA SECURITY</h3>
          <p className={css.para1}>
            Be fearless and pure; never waiver in your determination or your
            dedication to the spiritual life. Give freely. Be self-controlled,
            sincere, truthful, loving, and full of the desire to serve.
          </p>
          <div className={css.img_links}>
            <img src={fb} alt="" className={css.img1} />
            <img src={insta} alt="" className={css.img1} />
            <img src={twitter} alt="" className={css.img1} />
          </div>
        </div>
        <div className={css.part2}>
          <p className={css.heading2}>JAI SHREE RAM</p>
          <p className={css.para2}>Jai Shree Ram</p>
          <p className={css.para2}>Jai Shree Ram</p>
          <p className={css.para2}>Jai Shree Ram</p>
          <p className={css.para2}>Jai Shree Ram</p>
        </div>
        <div className={css.part3}>
          <p className={css.heading3}>JAI SHREE RAM</p>
          <p className={css.para3}>Jai Shree Ram</p>
          <p className={css.para3}>Jai Shree Ram</p>
          <p className={css.para3}>Jai Shree Ram</p>
          <p className={css.para3}>Jai Shree Ram</p>
        </div>
        <div className={css.part4}>
          <p className={css.heading4}>JAI SHREE RAM</p>
          <p className={css.para4}>Jai Shree Ram</p>
          <p className={css.para4}>Jai Shree Ram</p>
          <p className={css.para4}>Jai Shree Ram</p>
          <p className={css.para4}>Jai Shree Ram</p>
        </div>
      </div>
      <p className={css.copyright}>Ant Bhala To Sab Bhala @ Mahakal</p>
    </div>
  );
};

export default Footer;
