import React, { useState } from "react";
import { H1 } from "../../../../styles/H1";
import ShowExample3 from "./ShowExample3";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ,
  CHANGE_ROOMID_FILTER_HAS_PAYLOAD_REQ,
} from "../../../../applications/helpers/redux/types/filterDateTime/filterDateTime";
import { Selection } from "../../../../styles/Selection";
import { Text } from "../../../../styles/Text";
import { GroupSection } from "../../../../styles/GroupSection";

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
      <GroupSection>
        <H1>Example 2.2</H1>
        <Text>Room ID</Text>
        <Selection
          onChange={(e: any) => changeRoomId(e.target.value)}
          value={storeFilter.roomId}
        >
          <option value="A101">A101</option>
          <option value="A102">A102</option>
          <option value="Auditorium">Auditorium</option>
        </Selection>
        <Text>Filter</Text>
        <Selection
          onChange={(e: any) => changeRoomFilter(e.target.value)}
          value={storeFilter.filter}
        >
          <option value="today">TODAY</option>
          <option value="thisweek">THIS WEEK</option>
          <option value="nextweek">NEXT WEEK</option>
        </Selection>
      </GroupSection>
      <hr style={{ marginTop: "3rem" }} />
      <H1>Example 3</H1>
      <ShowExample3 />
    </div>
  );
}
