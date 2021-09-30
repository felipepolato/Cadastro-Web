import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 20%;
  height: 50%;
  padding: 3%;
  background: #fff;
  border-radius: 10px;
  border: 2px solid blue;

  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    margin: 3%;
    height: 15%;
    width: 70%;
    background: blue;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border: transparent;
    border-radius: 10px;

    &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 255, 0.5);
    }
  }

  box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);

  input {
    margin: 3%;
    border-radius: 10px;
    width: 70%;
    height: 10%;
    border: transparent;
    background: #ccc;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`;
