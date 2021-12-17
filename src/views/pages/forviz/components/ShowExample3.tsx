import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import demoBookingData from "../../../../mocks/demoBookingData.json";
import {
  convertDateToTimeStartAndEnd,
  convertDateFormatForContent,
} from "../../../../applications/helpers/convertData/convertDate";

import { useSelector, useDispatch } from "react-redux";
import { CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ } from "../../../../applications/helpers/redux/types/filterDateTime/filterDateTime";

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 1479px;
  height: 1004px;
  background: #efeeec;
`;
const LayoutContentLeft = styled.div`
  position: absolute;
  width: 585px;
  height: 1004px;
  left: 0px;
  top: 0px;
  padding-left: 5%;
  background: #46529d;
`;
const LayoutHeaderContentLeft = styled.div`
  position: relative;
  background: #2ebaee;
  height: 135px;
`;
const ContentHeaderLeft = styled.div`
  position: absolute;
  padding-left: 7%;
  width: 495px;
  height: 135px;
  font-family: "Roboto", sans-serif;
  font-size: 54px;
  color: #fff;
  top: 35%;
`;
const MainContent = styled.div`
  position: relative;
`;
const ContentFooterLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 375px;
  left: 0px;
  bottom: 0px;
  background: #4d59a1;
`;
const LayoutContentRight = styled.div`
  position: absolute;
  width: 893px;
  height: 1004px;
  right: 0px;
  top: 0px;
  background: #ffff;
`;
const LayoutHeaderContentRight = styled.div`
  position: relative;
  background: #efeeec;
  height: 135px;
  box-shadow: 0px -15px 30px -15px rgba(0, 0, 0, 0.1) inset;
`;
const MenuHeader = styled.div`
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
`;
const GroupMenu = styled.div`
  position: relative;
  top: 80px;
  display: flex;
  padding-left: 10%;
  gap: 10%;
`;
const TextContents = styled.div<{
  size?: string;
  weight?: number;
  optical?: boolean;
  top?: string;
}>`
  position: absolute;
  font-family: "Lato", sans-serif;
  font-weight: ${(props) => (props.weight ? props.weight : 1000)};
  font-size: ${(props) => (props.size ? props.size : "18px")};
  color: #ffffff;
  opacity: ${(props) => (props.optical ? 0.5 : 1)};
  top: ${(props) => props.top};
`;
const GroupTextContentsLeft = styled.div`
  z-index: 100;
  position: absolute;
  top: 26.5rem;
  display: flex;
  flex-direction: column;
`;
const TextContentsLeft = styled.div`
  margin-top: 1.2rem;
`;
const Text = styled.div<{
  size?: string;
  optical?: boolean;
}>`
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => (props.size ? props.size : "16px")};
  opacity: ${(props) => (props.optical ? 0.5 : 1)};
  color: #ffffff;
`;
const SectionContentScroll = styled.div`
  position: relative;
  height: 869px;
  overflow: scroll;
  .lastChild {
    top: 100px;
  }
  .mt-15 {
    margin-top: 15rem;
  }
`;
const TabInSectionContent = styled.div`
  position: absolute;
  background: #f7f7f7;
  border: 1px solid #ececec;
  box-sizing: border-box;
  font-size: 18px;
  padding: 0.5rem 0.5rem 0.5rem 8rem;
  font-family: "Roboto", sans-serif;
  font-weight: 1000;
  color: #787878;
  z-index: 100;
  width: 100%;
`;
const LineVertical = styled.div`
  position: absolute;
  border-left: 1px solid #ececec;
  height: 100%;
  left: 5rem;
  z-index: 10;
`;
const colorCicle = ["#3DC7D2", "#23CF5F", "#F3814A"];
const SectionTextData = styled.div<{
  top?: string;
  optical?: boolean;
  size?: string;
}>`
  position: absolute;
  margin-top: ${(props) => (props.top ? props.top : "1rem")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  opacity: ${(props) => (props.optical ? 0.5 : 1)};
`;
const GroupSectionTextData = styled.div`
  position: relative;
  padding-top: 5rem;
  padding-left: 8.2rem;
`;
// #3DC7D2 // #23CF5F //#F3814A
const Circle = styled.div<{ color?: string }>`
  left: 76px;
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.color ? props.color : "#3DC7D2")};
  border-radius: 50%;
  display: inline-block;
  top: 102px;
  z-index: 100;
`;
const MenuLine = styled.div<{ left?: string; size?: string }>`
  position: absolute;
  border: 2px solid #707fdd;
  background: #707fdd;
  top: 50px;
  left: ${(props) => props.left};
  width: ${(props) => props.size};
`;
const GroupMenuBtn = styled.div`
  position: relative;
`;
const TextContentNoData = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #000;
  font-weight: 300;
`;
export default function ShowExample3(props: any) {
  const storeFilter = useSelector(({ StoreFilter }: any) => StoreFilter);
  const dispatch = useDispatch();
  const roomId = storeFilter.roomId;
  const filter = storeFilter.filter;
  const [roomData, setRoomData] = useState<any>([]);
  // const filterDate = filter;
  const [todayData, setTodayData] = useState<any>();
  // const date = moment();
  const date = moment("2019-09-28 13:00:00");
  const dayOfWeek = date.format("dddd");
  const dayMonth = date.format("DD MMM");
  const getweekOfYear = date.weeks();
  const getYear = date.year();
  const getDayOfYear = date.dayOfYear();
  const getNextWeek = date.add(1, "weeks").weeks();

  // console.log('------- :>> ', moment('2019-09-28').format('ddd, DD MMM'));
  // const ss = "2019-09-19";
  // console.log("moment(2019-09-30).weeks() :>> ", moment(ss).weeks());
  // console.log("getweekOfYear :>> ", getweekOfYear);
  // console.log("getNextWeek :>> ", getNextWeek);
  useEffect(() => {
    const dataSet = demoBookingData
      .filter((item) => {
        if (filter === "today") {
          return (
            item.roomId === roomId &&
            moment(item.startTime).dayOfYear() === getDayOfYear && // <=== getDayOfYear // 271
            moment(item.startTime).year() === getYear // <=== getYear // 2019
          );
        } else if (filter === "thisweek") {
          return (
            item.roomId === roomId &&
            Number(moment(item.startTime).weeks()) === Number(getweekOfYear) && // <=== getweekOfYear // 39 || 40
            Number(moment(item.startTime).year()) === Number(getYear) // <=== getYear // 2019
          );
        } else {
          return (
            item.roomId === roomId &&
            moment(item.startTime).weeks() === getNextWeek &&
            moment(item.startTime).year() === getYear
          );
        }
      })
      .sort((a, b) => {
        var c: any = moment(a.startTime);
        var d: any = moment(b.startTime);
        return c - d;
      })
      .reduce((groups: any, item) => {
        const date = item.startTime.split(" ")[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        return groups;
      }, {});
    const finalData = Object.keys(dataSet).map((item) => {
      return {
        date: item,
        data: dataSet[item],
      };
    });
    const findDayOfYear = finalData.find((item: any) => {
      return moment(item.date).dayOfYear() === getDayOfYear; // <== getDayOfYear // 271
    });
    setTodayData(findDayOfYear);
    setRoomData(finalData);
  }, [roomId, filter]);

  const initialDateData = {
    dayOfWeek,
    dayMonth,
  };

  const [dateData, setDateData] = useState(initialDateData);
  const changeFilterFn = (value: string) => {
    dispatch({ type: CHANGE_DATE_FILTER_HAS_PAYLOAD_REQ, payload: value });
  };

  return (
    <Container>
      {/* <style>{"body { background-color: #B9BDC8; }"}</style> */}
      <LayoutContentLeft>
        <LayoutHeaderContentLeft>
          <ContentHeaderLeft>{roomId}</ContentHeaderLeft>
        </LayoutHeaderContentLeft>
        <MainContent>
          <TextContents size={"20px"} top={"8rem"}>
            Upcoming
          </TextContents>
          <TextContents weight={100} optical={true} size={"64px"} top={"12rem"}>
            {dateData.dayOfWeek}
          </TextContents>
          <TextContents weight={100} size={"64px"} top={"17rem"}>
            {dateData.dayMonth}
          </TextContents>
          <GroupTextContentsLeft>
            {todayData &&
              todayData.data &&
              todayData.data.length > 0 &&
              todayData.data.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <TextContentsLeft>
                      <Text optical={true}>
                        {convertDateToTimeStartAndEnd(
                          item.startTime,
                          item.endTime
                        )}
                      </Text>
                      <Text size={"20px"}>{item.title}</Text>
                    </TextContentsLeft>
                  </div>
                );
              })}
          </GroupTextContentsLeft>
        </MainContent>
        <ContentFooterLeft />
      </LayoutContentLeft>
      <LayoutContentRight>
        <LayoutHeaderContentRight>
          <GroupMenu>
            <GroupMenuBtn>
              <MenuHeader onClick={() => changeFilterFn("today")}>
                TODAY
              </MenuHeader>
              {filter === "today" && <MenuLine left={"10px"} size={"45px"} />}
            </GroupMenuBtn>
            <GroupMenuBtn>
              <MenuHeader onClick={() => changeFilterFn("thisweek")}>
                THIS WEEK
              </MenuHeader>
              {filter === "thisweek" && (
                <MenuLine left={"10px"} size={"95px"} />
              )}
            </GroupMenuBtn>
            <GroupMenuBtn>
              <MenuHeader onClick={() => changeFilterFn("nextweek")}>
                NEXT WEEK
              </MenuHeader>
              {filter === "nextweek" && (
                <MenuLine left={"10px"} size={"105px"} />
              )}
            </GroupMenuBtn>
          </GroupMenu>
        </LayoutHeaderContentRight>
        <SectionContentScroll>
          {roomData.length === 0 && (
            <TextContentNoData>Data not found</TextContentNoData>
          )}
          {roomData &&
            roomData.length > 0 &&
            roomData.map((item: any, index: number) => {
              return (
                <div key={index} className={index > 0 ? "mt-15" : ""}>
                  <div>
                    <TabInSectionContent>
                      {convertDateFormatForContent(item.date)}
                    </TabInSectionContent>
                    <LineVertical />
                  </div>

                  {item &&
                    item.data &&
                    item.data.length > 0 &&
                    item.data.map((itemData: any, indexData: number) => {
                      return (
                        <div key={indexData}>
                          <GroupSectionTextData
                            className={
                              indexData === item.data.length - 1 &&
                              indexData != 0
                                ? "lastChild"
                                : ""
                            }
                          >
                            <Circle
                              color={
                                indexData < colorCicle.length
                                  ? colorCicle[indexData]
                                  : colorCicle[2]
                              }
                            />
                            <SectionTextData optical>
                              {convertDateToTimeStartAndEnd(
                                itemData.startTime,
                                itemData.endTime
                              )}
                            </SectionTextData>
                            <SectionTextData top="2.5rem" size="20px">
                              {itemData.title}
                            </SectionTextData>
                          </GroupSectionTextData>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </SectionContentScroll>
      </LayoutContentRight>
    </Container>
  );
}
