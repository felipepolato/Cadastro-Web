import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [user, setUser] = useState({});
  const history = useHistory();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleState = (event) => {
    setState(event.target.value);
  };

  const handleCep = (event) => {
    setCep(event.target.value);
  };

  const handleCpf = (event) => {
    setCpf(event.target.value);
  };

  const handlePis = (event) => {
    setPis(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleStreet = (event) => {
    setStreet(event.target.value);
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const sendForm = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const token = localStorage.getItem("token");

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
      password: password,
    };

    axios
      .post("http://localhost:3003/user/", body, {
        headers: { "x-access-token": token },
      })
      .then((response) => {
        setUser(response.data);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={sendForm}>
          <User>
            <p>Dados do Usuário</p>
            <label htmlfor="name">Nome:</label>
            <input name="name" type="text" required onChange={handleName} />

            <label>E-mail:</label>
            <input name="email" type="email" required onChange={handleEmail} />

            <label for="CPF">CPF:</label>
            <input
              name="CPF"
              id="CPF"
              required
              // pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
              onChange={handleCpf}
            />

            <label for="PIS">PIS:</label>
            <input name="PIS" id="PIS" required onChange={handlePis} />

            <label>Senha:</label>
            <input
              name="password"
              type="password"
              required
              onChange={handlePassword}
            />
          </User>

          <Address>
            <p>Endereço do Usuário</p>
            <label>País:</label>
            <input name="pais" type="text" required onChange={handleCountry} />

            <label>Município:</label>
            <input
              name="municiopio"
              type="text"
              required
              onChange={handleCity}
            />

            <label>Estado:</label>
            <input name="state" type="text" required onChange={handleState} />

            <label>Rua:</label>
            <input name="street" type="text" required onChange={handleStreet} />

            <label>Numero:</label>
            <input name="number" type="text" required onChange={handleNumber} />

            <label for="CEP">CEP:</label>
            <input
              name="CEP"
              id="CEP"
              required
              pattern="\d{5}-\d{3}"
              onChange={handleCep}
            />

            <button type="submit">Enviar</button>
          </Address>
        </Form>
      </Content>
    </Container>
  );
}
