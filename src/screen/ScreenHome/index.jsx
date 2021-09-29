import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

///style////////
import { Container, Content, Form, Address, User } from "./style";

export default function ScreenHome() {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    localStorage.clear("user");

    history.push("/");
  };

  return (
    <Container>
      <p>Olá {user.name}!</p>

      <Content>
        <button>Config</button>
        <button onClick={logout}>Sair</button>
      </Content>
    </Container>
  );
}
