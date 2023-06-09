import css from "./Third.module.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import big_btn from "../../assets/big_btn.png";

const Third = () => {
  return (
    <div className={css.third}>
      {/* <div className={css.third_top}>
        <h2 className={css.top_heading}>Our Clients</h2>
        <div className={css.top_logos}>
          <img
            src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara6.png"
            alt=""
            className={css.top_logo}
          />
          <img
            src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara7.png"
            alt=""
            className={css.top_logo}
          />
          <img
            src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara8.png"
            alt=""
            className={css.top_logo}
          />
          <img
            src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara4.png"
            alt=""
            className={css.top_logo}
          />
          <img
            src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara1.png"
            alt=""
            className={css.top_logo}
          />
        </div>
      </div> */}
      <div className={css.our_clients}>
        <h2 className={css.heading}>OUR CLIENTS</h2>
        <div className={css.slider}>
          <div className={css.slider_track}>
            {/* first */}
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara1.png"
                alt=""
              />
            </div>
            {/* <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara2.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara3.png"
                alt=""
              />
            </div> */}
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara4.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara5.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara6.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara7.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img src="https://dcred.io/assets/img/dcredLogo.svg" alt="" />
            </div>

            {/* secons */}

            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara1.png"
                alt=""
              />
            </div>
            {/* <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara2.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara3.png"
                alt=""
              />
            </div> */}
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara4.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara5.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara6.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img
                src="https://nixonbit-public.s3.ap-south-1.amazonaws.com/assets/cara7.png"
                alt=""
              />
            </div>
            <div className={css.slide}>
              <img src="https://dcred.io/assets/img/dcredLogo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={css.third_bottom}>
        <div className={css.big_btn}>
          <img src={big_btn} alt="" className={css._big_btn_img} />
          <p className={css.btn_para}>SUPPORT PROVIDED</p>
        </div>
        {/* <h3 className={css.bottom_heading}>
          JAISA KARMA KAREGA WAISA FAL DEGA BHAGWAN. YE HAI GEETA KA GYAN.... YE
          HAI GEETA KA GYAN..
        </h3> */}
        <div className={css.circles}>
          <div className={css.circle}>
            <p className={css.circle_para}>Security Tools.</p>
          </div>
          <div className={css.circle_color}>
            <p className={css.circle_para}>24/7 monitoring</p>
          </div>
          <div className={css.circle}>
            <p className={css.circle_para}>Increased efficiency</p>
          </div>
          <div className={css.circle_color}>
            <p className={css.circle_para}>Enhanced visibility</p>
          </div>
          <div className={css.circle}>
            <p className={css.circle_para}>Secure all time</p>
          </div>
          <div className={css.circle_color}>
            <p className={css.circle_para}>early threat detection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
