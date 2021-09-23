import React, { useState } from "react";
import axios from "axios";

/////Style/////////////
import { Container, Content, Form, Address, User } from "./style";

export default function FormRegisters() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [pis, setPis] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [user, setUser] = ([])

  console.log(name, email, pais, municipio, estado, cep, pis, senha, cpf);

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

  const hendlerCpf = (event) => {
    setCpf(event.target.value);
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

  const sendForm = (user) => {

    const body = {
      name: user.name,
      email: user.email,
      country: user.country,
      state: user.state,
      city: user.city,
      street: user.street,
      number: user.number,
      cep: user.cep,
      cpf: user.cpf,
      pis: user.pis,
    };

    axios.post("http://localhost:3003/user/", body)
    .then((response)=>{
      setUser(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  return (
    <Container>
      <Content>

        <Form type="submit">
          <p>Dados do Usuário</p>

          <User>
            <div>
              <label>Nome</label>
              <input name="name" type="text" required onChange={hendlerName} />

              <label>E-mail</label>
              <input
                name="email"
                type="email"
                required
                onChange={hendlerEmail}
              />
            </div>

            <div>
              <label for="CPF">CPF:</label>
              <input
                name="CPF"
                id="CPF"
                required
                pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
                onChange={hendlerCpf}
              />

              <label for="PIS">PIS:</label>
              <input name="PIS" id="PIS" required onChange={hendlerPis} />
            </div>
          </User>

          <p>Endereço do Usuário</p>

          <Address>
            <div>
              <label>País</label>
              <input name="pais" type="text" required onChange={hendlerPais} />

              <label>Município</label>
              <input
                name="municiopio"
                type="text"
                required
                onChange={hendlerMunicipio}
              />
              <div>
                <label>Estado</label>
                <input
                  name="estado"
                  type="text"
                  required
                  onChange={hendlerEstado}
                />
                <label for="CEP">CEP:</label>
                <input
                  name="CEP"
                  id="CEP"
                  required
                  pattern="\d{5}-\d{3}"
                  onChange={hendlerCep}
                />
                <div>
                  <label>Senha:</label>
                  <input
                    name="password"
                    type="password"
                    required
                    onChange={hendlerSenha}
                  />
                </div>
              </div>
            </div>
          </Address>

          <button onClick={sendForm}>Enviar</button>
        </Form>
      </Content>
    </Container>
  );
}
