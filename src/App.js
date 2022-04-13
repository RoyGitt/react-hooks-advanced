import UserLogin from "./components/UserLogin/UserLogin";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { AuthContext } from "./store/auth-context";
import { useContext } from "react";

function App() {
  const userLoginHandler = (email, password) => {
    console.log(email, password);
  };
  const ctx = useContext(AuthContext);

  return (
    <>
      <Header />
      {!ctx.isLoggedIn && <UserLogin onUserLogin={userLoginHandler} />}
      {ctx.isLoggedIn && <Home />}
    </>
  );
}

export default App;
