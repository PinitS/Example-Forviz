import React, { useState, useEffect } from "react";
import { H1 } from "../../../../styles/H1";
import demoBookingData from "../../../../mocks/demoBookingData.json";
import moment from "moment";

interface BookingDataInterface {
  roomId: string;
  startTime: string;
  endTime: string;
}

export default function Example2() {
  const [bookingData, setBookingData] = useState(demoBookingData);

  const initialBookingInput = {
    roomId: "A101",
    startTime: moment().format("YYYY-MM-DD[T]HH:mm:ss"),
    endTime: moment().add(2, "day").format("YYYY-MM-DD[T]HH:mm:ss"),
  };
  const [bookingInput, setBookingInput] =
    useState<BookingDataInterface>(initialBookingInput);

  const changeStartDate = (value: string) => {
    console.log("value :>> ", value);
    // const startTime = moment(value).format("YYYY-MM-DD HH:MM:SS");
    setBookingInput({ ...bookingInput, startTime: value });
  };

  const changeEndDate = (value: string) => {
    // console.log("value :>> ", value);
    // const endTime = moment(value).format("YYYY-MM-DD HH:MM:SS");
    setBookingInput({ ...bookingInput, endTime: value });
  };

  const changeRoomId = (roomId: string) => {
    setBookingInput({ ...bookingInput, roomId });
  };

  const checkAvailability = () => {
    console.log("bookingInput :>> ", bookingInput);
  };
  return (
    <div>
      // เอาเวลา StartTime ไปเช็คกับ เวลา EndTime ใน Mocksว่ามากกว่าไหม แล้วเอา
      เวลา EndTime ไป เช็คกับ StartTime ใน Mocks ว่ามากกว่าไหม ประมาณนี้
      asdasdasdasdasdasdasdasdasd // เช็คคือ ลบ diff
      <H1>Example 2</H1>
      <div style={{ display: "flex" }}>
        <div>
          <p>roomId</p>
          <select onChange={(e: any) => changeRoomId(e.target.value)}>
            <option value="A101">A101</option>
            <option value="A102">A102</option>
            <option value="Auditorium">Auditorium</option>
          </select>
        </div>
        <div>
          <p>startDate</p>
          <input
            type="datetime-local"
            onChange={(e: any) => changeStartDate(e.target.value)}
            defaultValue={initialBookingInput.startTime}
          />
        </div>
        <div>
          <p>endDate</p>
          <input
            type="datetime-local"
            onChange={(e: any) => changeEndDate(e.target.value)}
            defaultValue={initialBookingInput.endTime}
          />
        </div>

        <div>
          <p>confirm</p>
          <button onClick={() => checkAvailability()}>Check</button>
        </div>
      </div>
      {/* <p>{JSON.stringify(bookingData)}</p> */}
    </div>
  );
}
