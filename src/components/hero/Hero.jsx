import css from "./Hero.module.css";
import hero1 from "../../assets/hero1.png";
import hero_img from "../../assets/hero_img.png";
import big_btn from "../../assets/big_btn.png";

const Hero = () => {
  return (
    <div
      className={css.hero}
      style={{
        backgroundImage: `url(${hero_img})`,
      }}>
      <h1 className={css.hero_heading}>
        Protecting Your Digital World with Comprehensive Cybersecurity Solutions
      </h1>
      <p className={css.hero_para}>
        Don't let your business become a victim. Take proactive steps to protect
        yourself. Sign up for our free risk assessment today and gain peace of
        mind knowing that you've taken the necessary steps to safeguard your
        business.
      </p>
      <div className={css.hero_btns}>
        <button className={css.hero_btn1}>CONTACT US</button>
        <button className={css.hero_btn2}>FREE DEMO</button>
      </div>
      <div className={css.big_btn}>
        <img src={big_btn} alt="" className={css._big_btn_img} />
        <p className={css.btn_para}>WHAT WE DO</p>
      </div>
    </div>
  );
};

export default Hero;
