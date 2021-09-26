import React, { useState } from "react";
import axios from "axios";

/////Style/////////////
import { Container, Content, Form, Address, User } from "./style";

export default function FormRegisters() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [pis, setPis] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [user, setUser] = useState({});

  console.log(name, email, country, city, state, cep, pis, senha, cpf);

  const handlerName = (event) => {
    setName(event.target.value);
  };

  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlerCountry = (event) => {
    setCountry(event.target.value);
  };

  const handlerState = (event) => {
    setState(event.target.value);
  };

  const handlerCep = (event) => {
    setCep(event.target.value);
  };

  const handlerCpf = (event) => {
    setCpf(event.target.value);
  };

  const handlerPis = (event) => {
    setPis(event.target.value);
  };

  const handlerCity = (event) => {
    setCity(event.target.value);
  };

  const handlerSenha = (event) => {
    setSenha(event.target.value);
  };

  const handlerStreet = (event) => {
    setStreet(event.target.value);
  };

  const handlerNumber = (event) => {
    setNumber(event.target.value);
  };

  const sendForm = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log("AQUI", user);

    const body = {
      name: name,
      email: email,
      country: country,
      state: state,
      city: city,
      street: street,
      number: number,
      cep: cep,
      cpf: cpf,
      pis: pis,
    };

    axios
      .post("http://localhost:3003/user/", body)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={sendForm}>
          <p>Dados do Usuário</p>

          <User>
            <div>
              <label>Nome</label>
              <input name="name" type="text" required onChange={handlerName} />

              <label>E-mail</label>
              <input
                name="email"
                type="email"
                required
                onChange={handlerEmail}
              />
            </div>

            <div>
              <label for="CPF">CPF:</label>
              <input
                name="CPF"
                id="CPF"
                required
                // pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
                onChange={handlerCpf}
              />

              <label for="PIS">PIS:</label>
              <input name="PIS" id="PIS" required onChange={handlerPis} />
            </div>
          </User>

          <p>Endereço do Usuário</p>

          <Address>
            <div>
              <label>País</label>
              <input
                name="pais"
                type="text"
                required
                onChange={handlerCountry}
              />

              <label>Município</label>
              <input
                name="municiopio"
                type="text"
                required
                onChange={handlerCity}
              />
              <div>
                <label>Estado</label>
                <input
                  name="state"
                  type="text"
                  required
                  onChange={handlerState}
                />

                <label>Rua</label>
                <input
                  name="street"
                  type="text"
                  required
                  onChange={handlerStreet}
                />

                <label>Numero</label>
                <input
                  name="number"
                  type="text"
                  required
                  onChange={handlerNumber}
                />

                <label for="CEP">CEP:</label>
                <input
                  name="CEP"
                  id="CEP"
                  required
                  pattern="\d{5}-\d{3}"
                  onChange={handlerCep}
                />
                <div>
                  <label>Senha:</label>
                  <input
                    name="password"
                    type="password"
                    required
                    onChange={handlerSenha}
                  />
                </div>
              </div>
            </div>
          </Address>

          <button type="submit">Enviar</button>
        </Form>
      </Content>
    </Container>
  );
}
