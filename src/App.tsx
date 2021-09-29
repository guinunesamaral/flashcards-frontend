import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

function App() {
  const auth = useSelector((state: any) => state.authReducer.auth);
  const dispatch = useDispatch();

  /**
   * @param {string} item - The item stored in the localStorage
   */
  const setUserSignedIn = useCallback(
    (item: string) => {
      const itemParsed = JSON.parse(item);
      dispatch({
        type: "signIn",
        payload: { email: itemParsed.email, password: itemParsed.password },
      });
    },
    [dispatch]
  );

  const storeUserInLocalStorage = (userEmail: string, userPassword: string) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        email: userEmail,
        password: userPassword,
      })
    );
  };

  useEffect(() => {
    const item = localStorage.getItem("auth");
    if (item) {
      setUserSignedIn(item);
    } else {
      if (auth.email && auth.password) {
        storeUserInLocalStorage(auth.email, auth.password);
      }
    }
  }, [auth.email, auth.isSignedIn, auth.password, setUserSignedIn]);

  return (
    <main style={styles.App}>{auth.isSignedIn ? <Home /> : <Auth />}</main>
  );
}

const styles = {
  App: {
    height: "100vh",
    background:
      "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
  },
};

export default App;
