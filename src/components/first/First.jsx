import css from "./First.module.css";
import first_bottom from "../../assets/first_bottom.png";

const First = () => {
  return (
    <div className={css.first}>
      <div className={css.top}>
        <h2 className={css.top_heading}>
          “Death is as sure for that which is born, as birth is for that which
          is dead. Therefore grieve not for what is inevitable.”
        </h2>
      </div>
      <div className={css.boxes}>
        <div className={css.box}></div>
        <div className={css.box}></div>
        <div className={css.box}></div>
        <div className={css.box}></div>
        <div className={css.box}></div>
        <div className={css.box}></div>
      </div>
      <div
        className={css.bottom}
        style={{
          backgroundImage: `url(${first_bottom})`,
        }}>
        <h2 className={css.bottom_heading}>
          “Arise, slay thy enemies, enjoy a prosperous kingdom,”
        </h2>
        <p className={css.bottom_para}>
          “Winter, summer, happiness, and pain; Giving, appearing, disappearing;
          Non-permanent, all of them; Just try to tolerate.”
        </p>
        <button className={css.bottom_btn}>LEARN MORE</button>
      </div>
    </div>
  );
};

export default First;
