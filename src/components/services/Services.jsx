import css from "./Services.module.css";

const Services = () => {
  return (
    <div className={css.services}>
      <h2 className={css.heading}>Services</h2>
      <div className={css.service_boxes}>
        <div className={css.service_box}></div>
        <div className={css.service_box}></div>
        <div className={css.service_box}></div>
        <div className={css.service_box}></div>
        <div className={css.service_box}></div>
      </div>
    </div>
  );
};

export default Services;
