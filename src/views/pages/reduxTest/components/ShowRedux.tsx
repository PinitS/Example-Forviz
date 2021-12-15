import React from "react";
import { useSelector } from "react-redux";

export default function ShowRedux() {
  const checkSagaData = useSelector(
    ({ StoreCheckRedux }: any) => StoreCheckRedux.data
  );

  return <div>
    <p>StoreCheckRedux : {checkSagaData}</p>
  </div>;
}
