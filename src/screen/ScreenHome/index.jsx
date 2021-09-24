import React, { useState, useEffect } from "react";
import axios from "axios";

///style////////////////////////////////
// import {  } from "./style";

export default function ScreenHome() {
  // const [name, setName] = useState("Felipe");
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("http://localhost:3003/user/")
      .then((response) => {
        setUser(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div>
      {user &&
        user.map((item) => {
          return <p>Olá {item.name}!</p>;
        })}

      <div>
        <button>Config</button>
        <button>Sair</button>
      </div>
    </div>
  );
}
