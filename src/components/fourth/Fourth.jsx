import css from "./Fourth.module.css";
import fourth_img from "../../assets/fourth_img.png";
import top_dots from "../../assets/top_dots.png";
import bottom_dots from "../../assets/bottom_dots.png";
import { Tabs } from "antd";
import "./fourth.css";
import Accordion from "../accordion/Accordion";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Fourth = () => {
  return (
    <div className={css.fourth}>
      <div className={css.fourth_top}>
        <img src={top_dots} alt="" className={css.top_dot} />
        <img src={bottom_dots} alt="" className={css.bottom_dot} />
        <div className={css.top_left}>
          <h2 className={css.top_heading}>
            “If one offers Me with love and devotion a leaf, a ﬂower, a fruit or
            water, I will accept it.”
          </h2>
          <p className={css.top_para}>
            “But it is I who am the ritual, I the sacrifice, the offering to the
            ancestors, the healing herb, the transcendental chant. I am the
            butter and the fire and the offering.”
          </p>
          <button className={css.top_btn}>GET STARTED</button>
        </div>
        <div className={css.top_right}>
          <img src={fourth_img} alt="" className={css.fourth_img} />
        </div>
      </div>
      <div className={css.fourth_top2}>
        <Tabs
          defaultActiveKey="tab1"
          tabPosition="left"
          className={css.tabs}
          size="large">
          <Tabs.TabPane
            tab="Data Privacy Compliance"
            key="tab1"
            className={css.tab_title}>
            <div className={css.tab_content}>
              with a team of highly skilled cybersecurity professionals and a
              wealth of industry experience, we are commited to providing
              cutting edge solutions that mitigate risks and ensure your data
              remains safe.
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Data Security Assessments"
            key="tab2"
            className={css.tab_title}>
            <div className={css.tab_content}>This is tab 2</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Data Encryption And Tokenization"
            key="tab3"
            className={css.tab_title}>
            <div className={css.tab_content}>This is tab 3</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Incident Response And Recovery"
            key="tab4"
            className={css.tab_title}>
            <div className={css.tab_content}>This is tab 4</div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Employee Training and Awareness"
            key="tab5"
            className={css.tab_title}>
            <div className={css.tab_content}>This is tab 5</div>
          </Tabs.TabPane>
        </Tabs>
      </div>
      <Accordion />
      <Services />
      <div className={css.fourth_middle}>
        <h3 className={css.middle_heading}>
          “The spirit is beyond destruction. No one can bring an end to spirit
          which is everlasting.
        </h3>
        <p className={css.middle_para}>
          “When a man dwells on the pleasure of sense, attraction for them
          arises in him. From attraction arises desire, the lust of possession,
          and this leads to passion, to anger. From passion comes confusion of
          mind, then loss of remembrance, the forgetting of duty. From this loss
          comes the ruin of reason, and the ruin of reason leads man to
          destruction.”
        </p>
        <div className={css.middle_line}></div>
      </div>
      <div className={css.fourth_bottom}>
        <div className={css.box}>
          <div src="" alt="" className={css.img_box}></div>
          <p className={css.bottom_para}>
            “Now I am become Death, the destroyer of worlds.In the dark night of
            all beings awakes to Light the tranquil man. But what is day to
            other beings is night for the sage who sees.”
          </p>
          <p className={css.name}>LORD KRISHNA</p>
          <p className={css.company}>BHAGAVAD GITA</p>
        </div>
        <div className={css.box}>
          <div src="" alt="" className={css.img_box}></div>
          <p className={css.bottom_para}>
            “Now I am become Death, the destroyer of worlds.In the dark night of
            all beings awakes to Light the tranquil man. But what is day to
            other beings is night for the sage who sees.”
          </p>
          <p className={css.name}>LORD KRISHNA</p>
          <p className={css.company}>BHAGAVAD GITA</p>
        </div>
        <div className={css.box}>
          <div src="" alt="" className={css.img_box}></div>
          <p className={css.bottom_para}>
            “Now I am become Death, the destroyer of worlds.In the dark night of
            all beings awakes to Light the tranquil man. But what is day to
            other beings is night for the sage who sees.”
          </p>
          <p className={css.name}>LORD KRISHNA</p>
          <p className={css.company}>BHAGAVAD GITA</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Fourth;
