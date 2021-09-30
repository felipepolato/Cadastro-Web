import React from "react";
import { useHistory } from "react-router";

///style////////
import { Container, Content } from "./style";

export default function ScreenHome() {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    localStorage.clear("user");

    history.push("/");
  };

  const goToConfig = () => {
    history.push("/config");
  };

  return (
    <Container>
      <p>Olá {user.name}!</p>

      <Content>
        <button onClick={goToConfig}>Configuração</button>
        <button onClick={logout}>Sair</button>
      </Content>
    </Container>
  );
}
