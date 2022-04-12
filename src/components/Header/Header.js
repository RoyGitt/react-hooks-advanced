import classes from "./Header.module.css";
import HeaderMenu from "./HeaderMenu";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Login Page</h1>
      {props.loggedIn && <HeaderMenu setLoggedIn={props.setLoggedIn} />}
    </header>
  );
};
export default Header;
