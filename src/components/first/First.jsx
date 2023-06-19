import css from "./First.module.css";
import first_bottom from "../../assets/first_bottom.png";

const First = () => {
  return (
    <div className={css.first} id="about-us">
      <div className={css.top}>
        <h2 className={css.top_heading}>
          At SeiaSecure IT Solutions, we are committed to delivering exceptional
          cybersecurity services aligned with the Certified Ethical Hacker (CEH)
          certification. Our team combines technical expertise, ethical hacking
          skills, and a deep understanding of cybersecurity to protect your
          digital assets effectively.
        </h2>
      </div>
      <div className={css.boxes}>
        <div className={css.box}>real-time threat monitoring</div>
        <div className={css.box}>proactive threat detection</div>
        <div className={css.box}>expert security analysis</div>
        <div className={css.box}>incident response</div>
        <div className={css.box}>data privacy</div>
        <div className={css.box}>blockchain security</div>
        <div className={css.box}>security audit</div>
      </div>
      <div
        className={css.bottom}
        style={{
          backgroundImage: `url(${first_bottom})`,
        }}>
        <h2 className={css.bottom_heading}>
          Imagine the devastating impact of losing $2.5 million* as a business
          owner. That's the average cost of a data breach. But you don't have to
          leave it to chance. Take immediate action and sign up for our free
          risk assessment to fortify your business against potential ruin.
        </h2>
        <p className={css.bottom_para}>
          Contact us today to discuss your specific security needs and let us
          help you fortify your defenses against evolving cyber threats. Protect
          your digital world with SeiaSecure IT Solutions – your trusted
          cybersecurity partner.
        </p>
        <button className={css.bottom_btn}>LEARN MORE</button>
      </div>
    </div>
  );
};

export default First;
