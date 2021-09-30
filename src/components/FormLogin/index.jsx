import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

/////Style/////////////
import { Container, Content, Form } from "./style";

export default function FormLogin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const history = useHistory("");

  const handleCpf = (event) => {
    setCpf(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const goToRegister = () => {
    history.push("/register");
  };

  const postLogin = () => {
    const body = {
      cpf: cpf,
      password: password,
      email: email,
    };

    axios
      .post("http://localhost:3003/user/authenticate/", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        history.push("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    postLogin();
  };

  return (
    <Container>
      <p>Olá, Visitante!</p>
      <Content>
        <Form onSubmit={handleSubmit}>
          <label for="CPF">CPF:</label>
          <input
            name="CPF"
            id="CPF"
            required
            pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
            onChange={handleCpf}
          />

          <label>E-mail/ PIS:</label>
          <input name="email" required onChange={handleEmail} />

          <label>Password:</label>
          <input
            name="password"
            type="password"
            required
            onChange={handlePassword}
          />

          <button type="submit">Entrar</button>
        </Form>
      </Content>
      <button onClick={goToRegister}>Fazer Cadastro</button>
    </Container>
  );
}
