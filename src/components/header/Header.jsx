import { NavLink } from "react-router-dom";
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
      <div className={css.logo_box}>
        <img src={logo} alt="" className={css.logo} />
      </div>
      <div className={click ? css.mbl_nav_container : css.nav_container}>
        <li className={css.nav_list}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #ffffff" : "",
            })}>
            HOME
          </NavLink>
        </li>
        <li className={css.nav_list}>
          <NavLink
            to="/about-us"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #ffffff" : "",
            })}>
            ABOUT-US
          </NavLink>
        </li>
        <li
          className={css.nav_list}
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          // onClick={openDropdown}
        >
          <NavLink
            to="/services"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #ffffff" : "",
            })}>
            SERVICES
          </NavLink>
          {/* {dropdown && <DropDown />} */}
        </li>
        <li className={css.nav_list}>
          <NavLink
            to="/extra"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #ffffff" : "",
            })}>
            PAGES
          </NavLink>
        </li>
        <li className={css.nav_list}>
          <NavLink
            to="/contact-us"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #ffffff" : "",
            })}>
            CONTACT-US
          </NavLink>
        </li>
      </div>
      <div className={css.header_mbl} onClick={handleClick}>
        <i className={click ? "fas fa-times fa-md" : "fas fa-bars fa-md"} />
      </div>
    </div>
  );
};

export default Header;
