import React, { useEffect } from "react";
import { H1 } from "../../../../styles/H1";
import styled, { css } from "styled-components";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ,
  CHANGE_ROOMID_FILTER_HAS_PAYLOAD_REQ,
} from "../../../../applications/helpers/redux/types/filterDateTime/filterDateTime";
import ShowExample3 from "./ShowExample3";

const Container = styled.div`
  width: 900px;
  margin: auto;
  background-color: antiquewhite;
`;
export default function Example4() {
  const { filter, roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (filter === "thisweek" || filter === "today" || filter === "nextweek") {
      dispatch({ type: CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ, payload: filter });
      dispatch({ type: CHANGE_ROOMID_FILTER_HAS_PAYLOAD_REQ, payload: roomId });
    } else {
      navigate("/404");
    }
  }, []);
  
  return (
    // <Container>
    <div>
      <H1>Example 3</H1>
      <H1>Query Param</H1>
      <ShowExample3 />
    </div>
    // </Container>
  );
}
