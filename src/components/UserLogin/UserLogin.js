import classes from "./UserLogin.module.css";
import Button from "../UI/Button";
import { useState, useEffect } from "react";
const UserLogin = (props) => {
  //Email
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailValid, setEmailValid] = useState();

  //Password
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState();

  //Form
  const [formIsValid, setFormisValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormisValid(
        enteredPassword.trim().length > 6 && enteredEmail.includes("@")
      );
    }, 300);
    return () => {
      clearTimeout(identifier);
    };
  }, [enteredPassword, enteredEmail]);

  const usernameHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.includes("@") && enteredPassword.trim().length > 6) {
      props.setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "1");
    } else {
      props.setLoggedIn(false);
    }
  };

  const validateEmailHandler = () => {
    if (!enteredEmail.includes("@")) {
      setEmailValid(false);
    }
  };
  const validatePasswordHandler = () => {
    if (enteredPassword.trim().length < 6) {
      setPasswordValid(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={loginHandler}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          className={emailValid === false && classes.invalid}
          id="email"
          type="email"
          onChange={usernameHandler}
          value={enteredEmail}
          onBlur={validateEmailHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className={passwordValid === false && classes.invalid}
          id="password"
          onChange={passwordHandler}
          type="password"
          value={enteredPassword}
          onBlur={validatePasswordHandler}
        />
      </div>
      <Button type="submit" disabled={!formIsValid}>
        Login
      </Button>
    </form>
  );
};

export default UserLogin;
