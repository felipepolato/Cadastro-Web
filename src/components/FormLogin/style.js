import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    height: 8%;
    width: 24%;
    margin-top: 1.5rem;
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 255, 0.5);
    }
  }

  p {
    font-size: 25px;
    border-bottom: 1px solid blue;
    font-weight: bold;
    color: blue;
  }
`;

export const Content = styled.div`
  width: 20%;
  height: 50%;
  padding: 2%;
  background: #fff;
  border-radius: 10px;
  border: 2px solid blue;

  button {
    height: 4rem;
    width: 70%;
    background: #ccc;
    font-size: 16px;

    &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 255, 0.5);
    }
  }

  box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    margin-top: 1rem;
    font-weight: bold;
  }

  input {
    margin-bottom: 2rem;
    height: 3rem;
    width: 70%;
    background: #ccc;
    border-radius: 10px;
    border: transparent;
  }
`;
