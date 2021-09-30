import axios from "axios";
import React from "react";
import {useHistory} from "react-router-dom"

/////Style/////////////
import { Container, Content, Form } from "./style";

export default function ConfigForm() {
    const history = useHistory()
    

const deleteUser = () =>{
    const token = localStorage.getItem("token");

    axios
    .delete("http://localhost:3003/user", {
        headers: {
            'x-access-token': token
        }
    })
    .then((res)=>{
        alert("Usuário Excluído com Sucesso!")
        history.push("/")
    })
}

const goToHome = () =>{
    history.push("/home")
}

  return (
    <Container>
      <Content>
        <input type="text" placeholder="senha atual" />
        <input type="text" placeholder="senha nova" />
        <button> Trocar Senha</button>
        <button onClick={deleteUser}> Excluir Conta</button>
        <button onClick={goToHome}> Voltar</button>
      </Content>
    </Container>
  );
}
