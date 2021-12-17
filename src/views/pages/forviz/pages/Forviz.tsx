import React, { useState } from "react";
import styled from "styled-components";
import Example1 from "../components/Example1";
import Example2 from "../components/Example2";
import Example3 from "../components/Example3";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default function Forviz() {
  const [example, setExample] = useState<number>(3);
  return (
    <div>
      {/* <Container> */}
      <p>Forviz</p>
      <p>https://paper.dropbox.com/doc/Dev-Fbr4cV8CCOA4itFkgIU2c</p>
      <div>
        <button onClick={() => setExample(1)}>Example 1</button>
        <button onClick={() => setExample(2)}>Example 2.1</button>
        <button onClick={() => setExample(3)}>Example 2.2</button>

      </div>
      {example === 1 && <Example1 />}
      {example === 2 && <Example2 />}
      {example === 3 && <Example3 />}
      {/* </Container> */}
    </div>
  );
}
