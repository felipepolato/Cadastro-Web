import React, { useState, useEffect } from "react";
import axios from "axios";

///style////////
import { Container, Content, Form, Address, User } from "./style";

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
    <Container>
      {user &&
        user.map((item) => {
          return <p>Olá {item.name}!</p>;
        })}

      <Content>
        <button>Config</button>
        <button>Sair</button>
      </Content>
    </Container>
  );
}
