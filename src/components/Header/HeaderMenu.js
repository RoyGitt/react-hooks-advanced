import classes from "./HeaderMenu.module.css";
import Button from "../UI/Button";
import { AuthContext } from "../../store/auth-context";
import { useContext } from "react";

const HeaderMenu = (props) => {
  const ctx = useContext(AuthContext);

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
          onClick={ctx.logoutHandler}
        >
          Logout
        </Button>
      </li>
    </ul>
  );
};
export default HeaderMenu;
