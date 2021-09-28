import styled from "styled-components";

export const Container = styled.div`
  background: #ccc;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    padding-top: 3rem;
    font-size: 24px;
    font-weight: bold;
    color: blue;
    margin-top: 0.2rem;
  }
`;

export const Content = styled.div`
  width: 10%;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  margin-top: 10rem;
  border: 2px solid red;

  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;

  &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
    }

  button {
    margin-bottom: 1rem;
    height: 3rem;
    width: 12rem;
    background: #ccc;
    border: transparent;
    border-radius: 10px;

    &:hover {
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.23);
    }
  }
`;
