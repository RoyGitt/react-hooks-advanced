import classes from "./Header.module.css";
import HeaderMenu from "./HeaderMenu";
import { AuthContext } from "../../store/auth-context";
import { useContext } from "react";
const Header = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <h1>Login Page</h1>
      {ctx.isLoggedIn && <HeaderMenu setLoggedIn={props.setLoggedIn} />}
    </header>
  );
};
export default Header;
