import React, { useState } from "react";
import demoBookingData from "../../../../mocks/demoBookingData.json";
import { H1 } from "../../../../styles/H1";
import ShowExample3 from "./ShowExample3";
export default function Example3() {
  const [inputRoomId, setInputRoomId] = useState("A101");
  const changeRoomId = (roomId: string) => {
    setInputRoomId(roomId);
  };
  const [roomFilter, setRoomFilter] = useState("This Week");
  return (
    <div>
      <H1>Example 2.2</H1>
      <p>roomId</p>
      <select onChange={(e: any) => changeRoomId(e.target.value)}>
        <option value="A101">A101</option>
        <option value="A102">A102</option>
        <option value="Auditorium">Auditorium</option>
      </select>
      <hr />
      <H1>Example 3</H1>
      <ShowExample3 />
    </div>
  );
}