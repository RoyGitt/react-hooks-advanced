import UserLogin from "./components/UserLogin/UserLogin";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  useEffect(() => {
    const loginInfo = localStorage.getItem("isLoggedIn");
    if (loginInfo === "1") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      {!loggedIn && <UserLogin setLoggedIn={setLoggedIn} />}
      {loggedIn && <Home />}
    </>
  );
}

export default App;
