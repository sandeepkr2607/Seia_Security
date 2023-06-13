import css from "./Accordion.module.css";
import { data } from "./data";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  return (
    <div style={{ color: "white" }} className={css.Accordions}>
      <h2 className={css.heading}>Our CEH-Aligned Services</h2>
      <div className={css.accordions_list}>
        {data.map((elem) => {
          const { id } = elem;
          return <MyAccordion key={id} {...elem} />;
        })}
      </div>
    </div>
  );
};

export default Accordion;
