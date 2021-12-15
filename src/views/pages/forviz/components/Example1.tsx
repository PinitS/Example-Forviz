import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ApiRequest } from "../../../../applications/helpers/http/ApiRequest";
import { H1 } from "../../../../styles/H1";

const Image = styled.img`
  height: 150px;
  margin: 1px 2px;
  overflow-x: hidden;
`;

const Container = styled.div`
  text-align: center;
  // margin-left:auto;
  // margin-right:auto;
  padding-left: 4rem;
  padding-right: 4rem;
`;

export default function () {
  const [imageData, setImageData] = useState<any>([]);

  useEffect(() => {
    ApiRequest({
      method: "GET",
      url: "https://picsum.photos/v2/list",
    })
      .then((response) => {
        setImageData(response);
        console.log("response :>> ", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <H1>Example 1</H1>
      <Container>
        <div>
          {imageData &&
            imageData.length > 0 &&
            imageData.map((item: any, index: any) => (
              <Image key={index} src={item.download_url} />
            ))}
        </div>
      </Container>
    </div>
  );
}
