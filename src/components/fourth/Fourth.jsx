import css from "./Fourth.module.css";
import fourth_img from "../../assets/fourth_img.png";
import top_dots from "../../assets/top_dots.png";
import bottom_dots from "../../assets/bottom_dots.png";
import { Tabs } from "antd";
import "./fourth.css";
import Accordion from "../accordion/Accordion";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import vishal from "../../assets/vishal.png";
import suneet from "../../assets/suneet.png";
import rakesh from "../../assets/rakesh.png";

const Fourth = () => {
  return (
    <div className={css.fourth}>
      <div className={css.fourth_top}>
        <img src={top_dots} alt="" className={css.top_dot} />
        <img src={bottom_dots} alt="" className={css.bottom_dot} />
        <div className={css.top_left}>
          <h2 className={css.top_heading}>
            seiasecure is a leading data privacy and protection startup
            dedicated to helping organisations across industries secure their
            digital assets
          </h2>
          <p className={css.top_para}>
            with a team of highly skilled cybersecurity professionals and a
            wealth of industry experience, we are commited to providing cutting
            edge solutions that mitigate risks and ensure your data remains
            safe.
          </p>
          <button className={css.top_btn}>QUERY</button>
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
            <div className={css.tab_content}>
              Identifying vulnerability in your IT infrastructure is crucial for
              maintaining data security. We conduct comprehensive assessment to
              identify potential risks, include vulnerabilities, gaps in
              security controls, and weak points in your systems. Our findings
              enable us to develop a roadmap for enhancing your data security
              posture.
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Data Encryption And Tokenization"
            key="tab3"
            className={css.tab_title}>
            <div className={css.tab_content}>
              Encryption sensitive data and tokenizing personally identifiable
              information (PII) are effective measures for protecting data at
              rest and in transit. We assist you in implementing robust
              encryption and tokenization techniques to ensure the
              confidentiality of your valuable information.
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Incident Response And Recovery"
            key="tab4"
            className={css.tab_title}>
            <div className={css.tab_content}>
              In the event of a data breach or security incident, Swift and
              effective response is vital. Our incident response team is
              available 24/7 to assist you in containing and mitigating the
              impact of incident. We provide guidance on minimizing data loss,
              restoring system, and implementing measures to prevent future
              occurences.
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Employee Training and Awareness"
            key="tab5"
            className={css.tab_title}>
            <div className={css.tab_content}>
              Your employees play a crucial role in maintaining data privacy and
              protection. We offer customized training programs to educate your
              staff about best practices, emerging threats, and their
              responsibilities in safeguarding sensitive data. By raising
              awareness and providing practical guidance, we empower your
              employees to become your strongest defence against cyber threats
            </div>
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
          <img src={rakesh} alt="" className={css.img_box} />

          <p className={css.name}>Rakesh Sekhar Arigala</p>
          <p className={css.post}>Co-Founder</p>
          <p className={css.email}>rakesh@seiasecure.com</p>
        </div>
        <div className={css.box}>
          <img src={suneet} alt="" className={css.img_box} />

          <p className={css.name}>sunit tiwari</p>
          <p className={css.post}>Co-Founder</p>
          <p className={css.email}>sunit@seiasecure.com</p>
        </div>
        <div className={css.box}>
          <img src={vishal} alt="" className={css.img_box} />

          <p className={css.name}>vishal</p>
          <p className={css.post}>Co-Founder</p>
          <p className={css.email}>vishal@seiasecure.com</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Fourth;
