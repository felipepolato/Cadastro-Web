import React, { useState, useEffect } from "react";
import axios from "axios";

///style////////////////////////////////
// import {  } from "./style";

export default function ScreenHome() {
  const [name, setName] = useState("Felipe");
  const [user, setUser] = useState([]);

  const useEffect =
    (() => {
      getUser();
    },
    []);

  const getUser = () => {
    axios
      .get("http://localhost:3003/user/")
      .then((response) => {
        setName(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div>
      {user.map((item) => {
        <div>
          <p>Olá {item.name}!</p>
          <div>
            <button>Config</button>
            <button>Sair</button>
          </div>
        </div>;
      })}
    </div>
  );
}
