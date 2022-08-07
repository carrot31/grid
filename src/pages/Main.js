import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <div className="container">
        <div className="item">1번</div>
        <div className="item">2번</div>
        <div className="item">3번</div>
        <div className="item">4번</div>
        <div className="item">5번</div>
        <div className="item">6번</div>
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue;
  .container {
    width: 400px;
    border: 10px solid black;
    border-radius: 20px;
    padding: 10px;
    display: grid;
    grid-template-rows: repeat(2, 100px);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    grid-auto-columns: 50px;
    gap: 10px;
  }
  .item:nth-child(1) {
    background: lightcyan;
    grid-column: 1 / 4;
  }
  .item:nth-child(2) {
    background: lightyellow;
  }
  .item:nth-child(3) {
    grid-column: span 2;
    background: lightgreen;
  }
  .item:nth-child(4) {
    background: lightgray;
  }
  .item:nth-child(5) {
    background: lightsalmon;
  }
`;
