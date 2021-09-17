import React, { useState } from "react";
import { useHistory } from "react-router";

/////Style/////////////
import { Container, Content, Form } from "./style";

export default function FormLogin() {
  const [pis, setPis] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const history = useHistory("");

  const hendlerCpf = (event) => {
    setCpf(event.target.value);
  };

  const hendlerPis = (event) => {
    setPis(event.target.value);
  };

  const hendlerSenha = (event) => {
    setSenha(event.target.value);
  };

  const hendlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const goToRegistrs = () => {
    history.push("/");
  };

  const goToHome = () => {
    history.push("/home");
  };

  return (
    <Container>
        <p>Olá, Visitante!</p>
      <Content>

        <Form type="submit">
          <label for="CPF">CPF:</label>
          <input
            name="CPF"
            id="CPF"
            required
            pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
            onChange={hendlerCpf}
          />

          <label>E-mail/ PIS:</label>
          <input name="email" type="email" required onChange={hendlerEmail} />

          <label>Senha:</label>
          <input
            name="password"
            type="password"
            required
            onChange={hendlerSenha}
          />

          <button onClick={goToHome}>Entrar</button>
        </Form>

      </Content>
        <button onClick={goToRegistrs}>Fazer Cadastro</button>
    </Container>
  );
}
