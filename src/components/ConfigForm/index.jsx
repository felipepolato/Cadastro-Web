import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/////Style/////////////
import {
  Container,
  Content,
  Form,
  User,
  Address,
  Password,
  ContainerForm,
  ButtonBox,
} from "./style";

export default function ConfigForm() {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log();
  const [updatedUser, setUpdatedUser] = useState(user);

  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const history = useHistory();

  const [name, setName] = useState(updatedUser.name);
  const [email, setEmail] = useState(updatedUser.email);
  const [country, setCountry] = useState(updatedUser.country);
  const [city, setCity] = useState(updatedUser.city);
  const [state, setState] = useState(updatedUser.state);
  const [cep, setCep] = useState(updatedUser.cep);
  const [pis, setPis] = useState(updatedUser.pis);
  const [cpf, setCpf] = useState(updatedUser.cpf);
  const [number, setNumber] = useState(updatedUser.number);
  const [street, setStreet] = useState(updatedUser.street);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    changeRegidters();
  };

  ////Alterar Cadastro//////
  const changeRegidters = () => {
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
      .put("http://localhost:3003/user", body, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        alert("Cadastro Alterado!");

        ///Pegar Usuário
        axios
          .get("http://localhost:3003/user", {
            headers: {
              "x-access-token": token,
            },
          })
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            setUpdatedUser(res.data);
          })
          .catch((error) => {
            alert(error.response.data.error);
          });
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  ////Auterar senha/////
  const changePassword = () => {
    const token = localStorage.getItem("token");

    const body = {
      password: password,
      newPassword: newPassword,
    };

    axios
      .put("http://localhost:3003/user/password", body, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        alert("Senha Alterada!");
        history.push("/home");
      })
      .catch((error) => {
        alert(error.response.data.error);
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
        alert(error.message);
      });
  };

  const goToHome = () => {
    history.push("/home");
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <ContainerForm>
            <User>
              <p>Novos Dados do Usuário</p>
              <label htmlfor="name">Nome:</label>
              <input
                name="name"
                type="text"
                required
                onChange={handleName}
                value={name}
              />

              <label>E-mail:</label>
              <input
                name="email"
                type="email"
                value={email}
                required
                onChange={handleEmail}
              />

              <label for="CPF">CPF:</label>
              <input
                name="CPF"
                id="CPF"
                value={cpf}
                required
                // pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
                onChange={handleCpf}
              />

              <label for="PIS">PIS:</label>
              <input
                name="PIS"
                id="PIS"
                required
                onChange={handlePis}
                value={pis}
              />
            </User>

            <Address>
              <p>Novo Endereço do Usuário</p>
              <label>País:</label>
              <input
                name="pais"
                type="text"
                value={country}
                required
                onChange={handleCountry}
              />

              <label>Município:</label>
              <input
                name="municiopio"
                type="text"
                value={city}
                required
                onChange={handleCity}
              />

              <label>Estado:</label>
              <input
                name="state"
                type="text"
                required
                onChange={handleState}
                value={state}
              />

              <label>Rua:</label>
              <input
                value={street}
                name="street"
                type="text"
                required
                onChange={handleStreet}
              />

              <label>Numero:</label>
              <input
                name="number"
                type="text"
                required
                value={number}
                onChange={handleNumber}
              />

              <label for="CEP">CEP:</label>
              <input
                name="CEP"
                id="CEP"
                value={cep}
                required
                pattern="\d{5}-\d{3}"
                onChange={handleCep}
              />
            </Address>
          </ContainerForm>
          <button type="submit">Salvar Alteraçãoes</button>
        </Form>

        <Password>
          <div>
            <label for="password">Senha:</label>
            <input
              id="password"
              type="password"
              placeholder="senha atual"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div>
            <label for="newPassword">Nova Senha:</label>
            <input
              id="newPassword"
              type="password"
              placeholder="senha nova"
              onChange={handleNewPassword}
              value={newPassword}
            />
          </div>
        </Password>

        <button onClick={changePassword}> Trocar Senha</button>

        <ButtonBox>
          <button onClick={deleteUser}> Excluir Conta</button>
          <button onClick={goToHome}> Voltar</button>
        </ButtonBox>
      </Content>
    </Container>
  );
}
