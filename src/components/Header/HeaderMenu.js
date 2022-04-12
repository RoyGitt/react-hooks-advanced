import classes from "./HeaderMenu.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const HeaderMenu = (props) => {
  const logoutHandler = () => {
    props.setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  const [viewMenu, setViewMenu] = useState(false);
  const mobileMenu = () => {
    setViewMenu(!viewMenu);
  };
  return (
    <ul className={classes.menu}>
      <li>
        <Button style={{ margin: "0", padding: "0" }}>User</Button>
      </li>
      <li>
        <Button style={{ margin: "0", padding: "0" }}>Admin</Button>
      </li>
      <li>
        <Button
          style={{ backgroundColor: "#fff", color: "#1abc9c", margin: "0" }}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      </li>
    </ul>
  );
};
export default HeaderMenu;
