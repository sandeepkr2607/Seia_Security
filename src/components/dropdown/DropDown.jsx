import { useState } from "react";
import "./DropDown.css";
import { MenuItems } from "../MenuItems";
import { NavLink } from "react-router-dom";

const DropDown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.cName}
                style={({ isActive }) => ({
                  borderBottom: isActive ? "3px solid #f4f4f4" : "",
                })}
                to={item.path}
                onClick={() => setClick(false)}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
