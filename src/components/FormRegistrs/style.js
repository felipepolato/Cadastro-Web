import styled from "styled-components";

export const Container = styled.div`
  background: #ccc;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    height: 3rem;
    width: 12rem;

    border-radius: 10px;
    border: transparent;
    cursor: pointer;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: blue;
    margin-top: 0.2rem;
  }
`;

export const Content = styled.div`
  width: 70%;
  height: 60%;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;

  box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);

  button {
    margin-bottom: 2.5rem;
    height: 3rem;
    width: 12rem;
    background: #ccc;

    &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
    }
  }
`;

export const Form = styled.form`
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    margin-right: 1rem;
    margin-top: 1rem;
    font-weight: bold;
  }

  input {
    margin-bottom: 2rem;
    height: 2rem;
    background: #ccc;
    border-radius: 10px;
    border: transparent;
    margin: 0.5rem;
  }

  div {
    text-align: center;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Address = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
