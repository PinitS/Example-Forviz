import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ApiRequest } from "../../../../applications/helpers/http/ApiRequest";
import Example1 from "../components/Example1";
import Example2 from "../components/Example2";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default function Forviz() {
  const [image, setImage] = useState<any>([]);

  return (
    <div>
      {/* <Container> */}
      <p>Forviz</p>
      {/* <Example1/> */}
      <Example2/>
      {/* </Container> */}
    </div>
  );
}
