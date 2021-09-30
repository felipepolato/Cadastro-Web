import styled from "styled-components";

export const Container = styled.div`
  background: #ccc;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 18px;
    font-weight: bold;
    color: blue;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 40%;
  padding: 2%;
  background: #fff;
  border-radius: 10px;
  border: 2px solid blue;

  box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);

  button {
    width: 100%;
    height: 4rem;
    border-radius: 10px;
    border: transparent;
    margin-top: 10%;
    background: blue;
    font-size: 20px;
    color: #fff;
    font-weight: bold;

    &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 255, 0.5);
    }
  }
`;

export const Form = styled.form`
  border-radius: 10px;

  button {
    width: 100%;
  }

  div {
    text-align: center;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-top: 10%;
    margin-bottom: 3%;
    font-size: 14px;

    display: flex;
  }

  input {
    height: 2rem;
    padding: 8px;
    background: #ccc;
    border-radius: 10px;
    border: transparent;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-top: 10%;
    margin-bottom: 3%;
    font-size: 14px;

    display: flex;
  }

  input {
    height: 2rem;
    padding: 8px;
    background: #ccc;
    border-radius: 10px;
    border: transparent;
  }
`;

export const Password = styled.div`
  margin-top: 15%;

  display: flex;

  label {
    font-weight: bold;
    font-size: 14px;
  }

  input {
    height: 2rem;
    padding: 8px;
    background: #ccc;
    border-radius: 10px;
    border: transparent;
  }

  div {
    margin-left: 10%;

    display: flex;
    flex-direction: column;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 10%;
`;
