import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/////Style/////////////
import { Container, Content, Form, User, Address } from "./style";

export default function ConfigForm() {
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [pis, setPis] = useState("");
  const [cpf, setCpf] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [user, setUser] = useState({});

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
        <Form >
          <User>
            <p>Novos Dados do Usuário</p>
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

            <label for="password">Senha:</label>
            <input
              id="password"
              type="password"
              placeholder="senha atual"
              onChange={handlePassword}
            />

            <label for="newPassword">Nova Senha</label>
            <input
              id="newPassword"
              type="password"
              placeholder="senha nova"
              onChange={handleNewPassword}
            />
          </User>

          <Address>
            <p>Novo Endereço do Usuário</p>
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

        <button onClick={changePassword}> Trocar Senha</button>
        <button onClick={deleteUser}> Excluir Conta</button>
        <button onClick={goToHome}> Voltar</button>
      </Content>
    </Container>
  );
}
