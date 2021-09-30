import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/////Style/////////////
import { Container, Content, Form } from "./style";

export default function ConfigForm() {
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const history = useHistory();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const changePassword = () => {
    const token = localStorage.getItem("token");

    const body = {
      password: password,
      newPassword: newPassword,
    };

    axios
      .put("http://localhost:3003/user", body, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        alert("Senha Alterada!");
        history.push("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const deleteUser = () => {
    const token = localStorage.getItem("token");

    axios
      .delete("http://localhost:3003/user", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        alert("Usuário Excluído com Sucesso!");
        localStorage.clear("token");
        localStorage.clear("user");
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const goToHome = () => {
    history.push("/home");
  };

  return (
    <Container>
      <Content>
        <input
          type="password"
          placeholder="senha atual"
          onChange={handlePassword}
        />
        <input
          type="password"
          placeholder="senha nova"
          onChange={handleNewPassword}
        />
        <button onClick={changePassword}> Trocar Senha</button>
        <button onClick={deleteUser}> Excluir Conta</button>
        <button onClick={goToHome}> Voltar</button>
      </Content>
    </Container>
  );
}
