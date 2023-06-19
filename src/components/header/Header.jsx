import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
// import DropDown from "../dropdown/DropDown";
// import call_logo from "../../assets/call_logo.png";
// import mail_logo from "../../assets/mail_logo.png";

const Header = () => {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 700) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };
  // const openDropdown = () => {
  //   if (window.innerWidth < 700) {
  //     setDropdown(!dropdown);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 700) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };
  return (
    <div className={css.header}>
      <Link
        to="/"
        className={css.logo_box}
        style={{ textDecoration: "none", color: "#ffffff" }}>
        {/* <img src={logo} alt="" className={css.logo} /> */}
        <h3 className={css.logo}>Seia Secure® </h3>
      </Link>
      <div className={click ? css.mbl_nav_container : css.nav_container}>
        <li className={css.nav_list}>
          <Link
            to="/"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            // style={({ isActive }) => ({
            //   borderBottom: isActive ? "2px solid #ffffff" : "",
            // })}
          >
            HOME
          </Link>
        </li>
        <li className={css.nav_list}>
          <Link
            to="about-us"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            // style={({ isActive }) => ({
            //   borderBottom: isActive ? "2px solid #ffffff" : "",
            // })}
          >
            ABOUT-US
          </Link>
        </li>
        <li
          className={css.nav_list}
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          // onClick={openDropdown}
        >
          <Link
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            // style={({ isActive }) => ({
            //   borderBottom: isActive ? "2px solid #ffffff" : "",
            // })}
          >
            SERVICES
          </Link>
          {/* {dropdown && <DropDown />} */}
        </li>
        {/* <li className={css.nav_list}>
          <NavLink
            to="/extra"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #ffffff" : "",
            })}>
            PAGES
          </NavLink>
        </li> */}
        <li className={css.nav_list}>
          <Link
            to="contact-us"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            // style={({ isActive }) => ({
            //   borderBottom: isActive ? "2px solid #ffffff" : "",
            // })}
          >
            CONTACT-US
          </Link>
        </li>
      </div>
      <div className={css.header_mbl} onClick={handleClick}>
        <i className={click ? "fas fa-times fa-md" : "fas fa-bars fa-md"} />
      </div>
    </div>
  );
};

export default Header;
