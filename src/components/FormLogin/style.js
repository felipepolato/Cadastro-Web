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
    height: 3rem;
    width: 12rem;
    margin-top: 1.5rem;
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: blue;
  }
`;

export const Content = styled.div`
  width: 20%;
  background: #fff;
  border-radius: 10px;

  button {
    margin-bottom: 1rem;
    height: 3rem;
    width: 12rem;
    background: #ccc;
  }

  &:hover {
    box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
  }
`;

export const Form = styled.form`
  border: 2px solid blue;
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
  }
`;
