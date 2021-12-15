import React from "react";
import ShowRedux from "./components/ShowRedux";
import { useDispatch } from "react-redux";
import {
  IS_CHECK_SAGA_NO_PAYLOAD_REQ,
  IS_CHECK_SAGA_HAS_PAYLOAD_REQ,
} from "../../../applications/helpers/redux/types/checkRedux/checkRedux";

export default function ReduxTest() {
  const dispatch = useDispatch();

  const withPayload = (payload: number) => {
    dispatch({ type: IS_CHECK_SAGA_HAS_PAYLOAD_REQ, payload });
  };

  const noPayload = () => {
    dispatch({ type: IS_CHECK_SAGA_NO_PAYLOAD_REQ });
  };

  return (
    <div>
      <p>ReduxTest</p>
      <button onClick={() => withPayload(100)}>withPayload</button>
      <button onClick={() => noPayload()}>noPayload</button>
      <p>==========</p>
      <ShowRedux />
    </div>
  );
}
