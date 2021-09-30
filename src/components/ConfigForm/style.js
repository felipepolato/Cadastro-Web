import styled from "styled-components";

export const Container = styled.div`
  background: #ccc;
  height: 100vh;

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
  width: 25%;
  height: 80%;
  padding: 2%;
  background: #fff;
  border-radius: 10px;
  border: 2px solid blue;

  box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);

  button {
    width: 100%;
    height: 4rem;
    background: #ccc;
    border-radius: 10px;
    border: transparent;
    margin-top: 40%;
    background: blue;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;

    &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 255, 0.5);
    }
  }
`;

export const Form = styled.form`
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  flex-direction: row;

  label {
    font-weight: bold;
    margin-top: 10%;
    margin-bottom: 3%;
    font-size: 14px;

    display: flex;
  }

  input {
    height: 2.5rem;
    background: #ccc;
    border-radius: 10px;
    border: transparent;
  }

  div {
    text-align: center;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
`;
