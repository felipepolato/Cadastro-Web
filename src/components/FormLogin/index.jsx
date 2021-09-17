import React, { useState } from "react";
import { useHistory } from "react-router";

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

  return (
    <div>
        <p>Olá, Visitante!</p>
      <form type="submit">
        <label for="CPF">
          CPF:
          <input
            name="CPF"
            id="CPF"
            required
            pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
            onChange={hendlerCpf}
          />
        </label>

        <label>
          E-mail/ PIS
          <input name="email" type="email" required onChange={hendlerEmail} />
        </label>

        <label>
          Senha:
          <input
            name="password"
            type="password"
            required
            onChange={hendlerSenha}
          />
        </label>

        <button>Entrar</button>
      </form>

      <button onClick={goToRegistrs}>Fazer Cadastro</button>
    </div>
  );
}
