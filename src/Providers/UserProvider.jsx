import axios from "axios";
import React, { useState, useEffect } from "react";
import { UserContext } from "../Context";
import Loading from "../Loading";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
  }

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, handleLogout, isLoggedIn: !!token }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
