import React, { useState } from "react";
import styled from "styled-components";
import { H1 } from "../../../../styles/H1";
import Example1 from "../components/Example1";
import Example2 from "../components/Example2";
import Example3 from "../components/Example3";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
const Button = styled.div<{ color?: string }>`
  color: #fff;
  font-size: 20px;
  margin: 0.5em;
  padding: 0.25em 1em;
  border-width: 2px;
  border-style: solid;
  background-color: #e74c3c;
  border-color: #ff0000;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
`;
const GroupBtn = styled.div`
  display: flex;
  justify-content: center;
`;
const Contents = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;
export default function Forviz() {
  const [example, setExample] = useState<number>(3);
  const navigate = useNavigate();

  return (
    <div>
      {/* <Container> */}
      <H1>Example Forviz</H1>
      <Contents>
        https://paper.dropbox.com/doc/Dev-Fbr4cV8CCOA4itFkgIU2c
      </Contents>
      <GroupBtn>
        <Button onClick={() => setExample(1)}>Example 1</Button>
        <Button onClick={() => setExample(2)}>Example 2.1</Button>
        <Button onClick={() => setExample(3)}>Example 2.2</Button>
        <Button onClick={() => navigate("/bookings/thisweek/A101")}>Query Param</Button>
      </GroupBtn>
      {example === 1 && <Example1 />}
      {example === 2 && <Example2 />}
      {example === 3 && <Example3 />}
      {/* </Container> */}
    </div>
  );
}
