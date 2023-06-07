import css from "./Hero.module.css";
import hero_png from "../../assets/hero.png";
import big_btn from "../../assets/big_btn.png";

const Hero = () => {
  return (
    <div
      className={css.hero}
      style={{
        backgroundImage: `url(${hero_png})`,
      }}>
      <h1 className={css.hero_heading}>
        “Man is made by his belief. As he believes, so he is”
      </h1>
      <p className={css.hero_para}>
        “You have a right to perform your prescribed duties, but you are not
        entitled to the fruits of your actions.”
      </p>
      <div className={css.hero_btns}>
        <button className={css.hero_btn1}>LEARN MORE</button>
        <button className={css.hero_btn2}>GET STARTED</button>
      </div>
      <div className={css.big_btn}>
        <img src={big_btn} alt="" className={css._big_btn_img} />
        <p className={css.btn_para}>WHAT WE DO</p>
      </div>
    </div>
  );
};

export default Hero;
