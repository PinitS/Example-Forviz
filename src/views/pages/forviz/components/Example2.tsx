import React, { useState, useEffect } from "react";
import { H1 } from "../../../../styles/H1";
import demoBookingData from "../../../../mocks/demoBookingData.json";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const changeStartDate = (startTime: string) => {
    setBookingInput({ ...bookingInput, startTime });
  };

  const changeEndDate = (endTime: string) => {
    setBookingInput({ ...bookingInput, endTime });
  };

  const changeRoomId = (roomId: string) => {
    setBookingInput({ ...bookingInput, roomId });
  };
  const testInputS = "2019-09-28 12:10:00";
  const testInputE = "2019-09-28 15:20:00";
  const checkAvailability = () => {
    const checkTimeInput = moment(bookingInput.endTime).diff(
      moment(bookingInput.startTime)
    );
    if (checkTimeInput <= 0) {
      toast.error("Datetime is not correct!!");
    } else {
      const roomReady = bookingData
        .filter((item) => {
          return item.roomId === bookingInput.roomId;
        })
        .map((item) => {
          const addOneMinutes = moment(bookingInput.startTime).add(1, "minutes").format();
          const subtractOneMinutes = moment(bookingInput.endTime).subtract(1, 'minutes').format();
          const checkStartTimeInputBetween = moment(
            addOneMinutes
          ).isBetween(item.startTime, item.endTime); // true คือ อยู่ระหว่าง ใน booking false คือ ไม่ได้อยู่
          const checkEndTimeInputBetween = moment(
            subtractOneMinutes
          ).isBetween(item.startTime, item.endTime); // true คือ อยู่ระหว่าง ใน booking false คือ ไม่ได้อยู่
          const checkStartTimeBookingBetween = moment(item.startTime).isBetween(
            addOneMinutes,
            subtractOneMinutes
          ); // true คือ อยู่ระหว่าง ใน booking false คือ ไม่ได้อยู่
          const checkEndTimeBookingBetween = moment(item.endTime).isBetween(
            addOneMinutes,
            subtractOneMinutes
          ); // true คือ อยู่ระหว่าง ใน booking false คือ ไม่ได้อยู่

          // const bookingDataStart = item.startTime;
          // const bookingDataEnd = item.endTime;

          // const checkStartTimeInputBetween = moment(testInputS).isBetween(
          //   bookingDataStart,
          //   bookingDataEnd
          // ); // true คือ อยู่ระหว่าง ใน booking false คือ ไม่ได้อยู่
          // const checkEndTimeInputBetween = moment(testInputE).isBetween(
          //   bookingDataStart,
          //   bookingDataEnd
          // ); // true คือ อยู่ระหว่าง ใน booking false คือ ไม่ได้อยู่
          // const checkStartTimeBookingBetween = moment(
          //   bookingDataStart
          // ).isBetween(testInputS, testInputE); // true คือ อยู่ระหว่าง ใน booking false คือ ไม่ได้อยู่
          // const checkEndTimeBookingBetween = moment(bookingDataEnd).isBetween(
          //   testInputS,
          //   testInputE
          // ); // true คือ อยู่ระหว่าง ใน booking false คือ ไม่ได้อยู่
          const checkLogic =
            checkStartTimeInputBetween === false &&
            checkEndTimeInputBetween === false &&
            checkStartTimeBookingBetween === false &&
            checkEndTimeBookingBetween === false; // true คือ จองได้ false คือ จองไม่ได้
          return checkLogic === true ? true : false;
        })
        .every((item) => {
          return item === true;
        });
      if (roomReady) {
        toast.success("The booking was successful.");
      } else {
        toast.error("The room booking was unsuccessful.");
      }
      // console.log('roomReady :>> ', roomReady);
    }
  };
  return (
    <div>
      <H1>Example 2.1</H1>
      <ToastContainer />
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
    </div>
  );
}
