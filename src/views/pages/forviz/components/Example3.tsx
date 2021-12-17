import React, { useState } from "react";
import { H1 } from "../../../../styles/H1";
import ShowExample3 from "./ShowExample3";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ,
  CHANGE_ROOMID_FILTER_HAS_PAYLOAD_REQ,
} from "../../../../applications/helpers/redux/types/filterDateTime/filterDateTime";

export default function Example3() {
  const storeFilter = useSelector(({ StoreFilter }: any) => StoreFilter);
  const dispatch = useDispatch();

  const changeRoomId = (roomId: string) => {
    // setInputRoomId(roomId);
    dispatch({ type: CHANGE_ROOMID_FILTER_HAS_PAYLOAD_REQ, payload: roomId });
  };
  const changeRoomFilter = (filter: string) => {
    dispatch({ type: CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ, payload: filter });
  };

  return (
    <div>
      <H1>Example 2.2</H1>
      {JSON.stringify(storeFilter)}
      <p>roomId</p>
      <select
        onChange={(e: any) => changeRoomId(e.target.value)}
        defaultValue={storeFilter.roomId}
      >
        <option value="A101">A101</option>
        <option value="A102">A102</option>
        <option value="Auditorium">Auditorium</option>
      </select>
      <select
        onChange={(e: any) => changeRoomFilter(e.target.value)}
        defaultValue={storeFilter.filter}
      >
        <option value="today">TODAY</option>
        <option value="thisweek">THIS WEEK</option>
        <option value="nextweek">NEXT WEEK</option>
      </select>
      <hr />
      <H1>Example 3</H1>
      <ShowExample3 />
    </div>
  );
}
