import css from "./Second.module.css";
import second_bg from "../../assets/second_bg.png";
import code1 from "../../assets/code1.png";
import code2 from "../../assets/code2.png";
import code3 from "../../assets/code3.png";
import code4 from "../../assets/code4.png";
import code5 from "../../assets/code5.png";
import quote_logo from "../../assets/quote_logo.png";

const Second = () => {
  return (
    <div
      className={css.second}
      style={{ backgroundImage: `url(${second_bg})` }}>
      <div className={css.second_top}>
        <img src={code1} alt="" className={css.code_img1} />
        <img src={code2} alt="" className={css.code_img2} />
        <img src={code3} alt="" className={css.code_img3} />
        <img src={code4} alt="" className={css.code_img4} />
        <img src={code5} alt="" className={css.code_img5} />
      </div>
      <div className={css.second_middle}>
        <h2 className={css.middle_heading}>FIELDS WE COVER</h2>
        <p className={css.middle_para}>
          “My dear Arjuna, how have these impurities come upon you? They are not
          at all befitting a man who knows the value of life. They lead not to
          higher planets, but to infamy. O son of Prtha, do not yield to this
          degrading impotence, that it does not become you. Give up such petty
          weakness of heart and arise, O chastiser of the enemy.”
        </p>
        <div className={css.line}></div>
      </div>
      <div className={css.second_bottom}>
        <div className={css.quote_box}>
          <div className={css.img_box}>
            <img src={quote_logo} alt="" className={css.quote_img} />
          </div>
          <p className={css._para}>Financial Services</p>
        </div>
        <div className={css.quote_box}>
          <div className={css.img_box}>
            <img src={quote_logo} alt="" className={css.quote_img} />
          </div>
          <p className={css._para}>Healthcare</p>
        </div>
        <div className={css.quote_box}>
          <div className={css.img_box}>
            <img src={quote_logo} alt="" className={css.quote_img} />
          </div>
          <p className={css._para}>Government Facilities</p>
        </div>
        <div className={css.quote_box}>
          <div className={css.img_box}>
            <img src={quote_logo} alt="" className={css.quote_img} />
          </div>
          <p className={css._para}>Retail</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
