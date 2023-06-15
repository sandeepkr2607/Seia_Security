import css from "./Services.module.css";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";

const Services = () => {
  return (
    <div className={css.services}>
      <h2 className={css.heading}>our programme and training</h2>
      <div className={css.service_boxes}>
        <div className={css.service_box}>
          <img src={ser1} alt="" className={css.service_img} />
          <p className={css.service_para}>cyber swachhta</p>
        </div>
        <div className={css.service_box}>
          <img src={ser2} alt="" className={css.service_img} />
          <p className={css.service_para}>cyber awareness</p>
        </div>
        <div className={css.service_box}>
          <img src={ser3} alt="" className={css.service_img} />
          <p className={css.service_para}>cyber training modules</p>
        </div>
        <div className={css.service_box}>
          <img src={ser4} alt="" className={css.service_img} />
          <p className={css.service_para}>cyber discipline training</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
