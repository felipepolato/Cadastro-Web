import React, { useState } from "react";

export default function FormRegisters() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [pis, setPis] = useState("");
  const [senha, setSenha] = useState("");

  console.log(name, email, pais, municipio, estado, cep, pis, senha)

  const hendlerName = (event) => {
    setName(event.target.value);
  };

  const hendlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const hendlerPais = (event) => {
    setPais(event.target.value);
  };

  const hendlerEstado = (event) => {
    setEstado(event.target.value);
  };

  const hendlerCep = (event) => {
    setCep(event.target.value);
  };

  const hendlerPis = (event) => {
    setPis(event.target.value);
  };

  const hendlerMunicipio = (event) => {
    setMunicipio(event.target.value);
  };

  const hendlerSenha = (event) => {
    setSenha(event.target.value);
  };

  return (
    <form type="submit">
      <label>
        Nome
        <input name="name" type="text" required onChange={hendlerName} />
      </label>

      <label>
        E-mail
        <input name="email" type="email" required onChange={hendlerEmail}/>
      </label>
      <p>Endereço do Usuário</p>

      <label>
        País
        <input name="pais" type="text" required onChange={hendlerPais}/>
      </label>

      <label>
        Município
        <input name="municiopio" type="text" required onChange={hendlerMunicipio}/>
      </label>

      <label>
        Estado
        <input name="estado" type="text" required onChange={hendlerEstado}/>
      </label>

      <label for="CEP">
        CEP:
        <input name="CEP" id="CEP" required pattern="\d{5}-\d{3}" onChange={hendlerCep}/>
      </label>

      <label for="PIS">
        PIS:
        <input name="PIS" id="PIS" required onChange={hendlerPis}/>
      </label>

      <label>
        Senha:
        <input name="password" type="password" required onChange={hendlerSenha}/>
      </label>

      <button>Enviar</button>
    </form>
  );
}
