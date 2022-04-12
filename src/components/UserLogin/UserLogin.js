import classes from "./UserLogin.module.css";
import Button from "../UI/Button";
import { useState, useEffect, useReducer } from "react";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, valid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, valid: state.value.includes("@") };
  }
  return { value: "", valid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, valid: action.value.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, valid: state.value.trim().length > 6 };
  }
  return { value: "", valid: false };
};

const UserLogin = (props) => {
  //Form
  const [formIsValid, setFormisValid] = useState(false);

  //Email
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    valid: undefined,
  });

  //Password
  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    valid: undefined,
  });

  const emailHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const { valid: emailisValid } = email;
  const { valid: passwordisValid } = password;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormisValid(emailisValid && passwordisValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailisValid, passwordisValid]);

  const loginHandler = (event) => {
    event.preventDefault();
    if (email.valid && password.valid) {
      props.setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "1");
    } else {
      props.setLoggedIn(false);
    }
  };

  console.log(password.value);
  console.log(password.valid);
  return (
    <form className={classes.form} onSubmit={loginHandler}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          className={email.valid === false && classes.invalid}
          id="email"
          type="email"
          onChange={emailHandler}
          value={email.value}
          onBlur={validateEmailHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className={password.valid === false && classes.invalid}
          id="password"
          onChange={passwordHandler}
          type="password"
          value={password.value}
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
