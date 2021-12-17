import React from "react";
import { H1 } from "../../../../styles/H1";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 900px;
  margin: auto;
  background-color: antiquewhite;
`;
export default function Example4() {
  return (
    <Container>
      <div>
        <H1>Example 2.2</H1>
      </div>
    </Container>
  );
}
