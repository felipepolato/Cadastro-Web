import styled from "styled-components";

export const Container = styled.div`
  background: #ccc;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 30px;
    font-weight: bold;
    color: blue;
    border-bottom: 1px solid blue;
  }
`;

export const Content = styled.div`
  width: 20%;
  height: 40%;
  padding: 2%;
  background: #fff;
  border-radius: 10px;
  border: 2px solid blue;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);

  button {
    margin-bottom: 25%;
    height: 20%;
    width: 70%;
    border: transparent;
    border-radius: 10px;
    background: blue;
    font-size: 20px;
    color: #fff;
    font-weight: bold;

    &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 255, 0.5);
    }
  }
`;
