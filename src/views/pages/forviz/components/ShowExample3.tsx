import React from "react";
import styled, { css } from "styled-components";

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
export default function ShowExample3() {
  return (
    <Container>
      <style>{"body { background-color: #B9BDC8; }"}</style>
      <LayoutContentLeft>
        <LayoutHeaderContentLeft>
          <ContentHeaderLeft>A101</ContentHeaderLeft>
        </LayoutHeaderContentLeft>
        <MainContent>
          <TextContents size={"20px"} top={"8rem"}>
            Upcoming
          </TextContents>
          <TextContents weight={100} optical={true} size={"64px"} top={"12rem"}>
            Monday
          </TextContents>
          <TextContents weight={100} size={"64px"} top={"17rem"}>
            28 Sep
          </TextContents>
          <GroupTextContentsLeft>
            <TextContentsLeft>
              <Text optical={true}>13:00 - 14:00</Text>
              <Text size={"20px"}>Lunch with Petr</Text>
            </TextContentsLeft>
            <TextContentsLeft>
              <Text optical={true}>15:00 - 16:00</Text>
              <Text size={"20px"}>Sales Weekly Meeting</Text>
            </TextContentsLeft>
            <TextContentsLeft>
              <Text optical={true}>16:00 - 18:00</Text>
              <Text size={"20px"}>Anastasia Website Warroom</Text>
            </TextContentsLeft>
          </GroupTextContentsLeft>
        </MainContent>
        <ContentFooterLeft />
      </LayoutContentLeft>
      <LayoutContentRight>
        <LayoutHeaderContentRight>
          <GroupMenu>
            <MenuHeader>THIS WEEK</MenuHeader>
            <MenuHeader>NEXT WEEK</MenuHeader>
            <MenuHeader>WHOLE MONTH</MenuHeader>
          </GroupMenu>
        </LayoutHeaderContentRight>
        <SectionContentScroll>
          <div>
            <div>
              <TabInSectionContent>Today (Mon, 28 Sep)</TabInSectionContent>
              <LineVertical />
            </div>
            <div>
              <GroupSectionTextData>
                <Circle />
                <SectionTextData optical>1 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem" size="20px">
                  Lunch with Petr
                </SectionTextData>
              </GroupSectionTextData>
              <GroupSectionTextData>
                <Circle />
                <SectionTextData optical>2 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem" size="20px">
                  Lunch with Petr
                </SectionTextData>
              </GroupSectionTextData>
              <GroupSectionTextData className="lastChild">
                <Circle />
                <SectionTextData optical>3 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem" size="20px">
                  Lunch with Petr
                </SectionTextData>
              </GroupSectionTextData>
            </div>
          </div>
          {/* <div className="mt-15">
            <div>
              <TabInSectionContent>Today (Mon, 28 Sep)</TabInSectionContent>
              <LineVertical />
            </div>
            <div>
              <GroupSectionTextData>
                <Circle />
                <SectionTextData>1 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
              <GroupSectionTextData>
                <Circle />
                <SectionTextData>2 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
              <GroupSectionTextData className="lastChild">
                <Circle />
                <SectionTextData>3 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
            </div>
          </div>
          <div className="mt-15">
            <div>
              <TabInSectionContent>Today (Mon, 28 Sep)</TabInSectionContent>
              <LineVertical />
            </div>
            <div>
              <GroupSectionTextData>
                <Circle />
                <SectionTextData>1 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
              <GroupSectionTextData>
                <Circle />
                <SectionTextData>2 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
              <GroupSectionTextData className="lastChild">
                <Circle />
                <SectionTextData>3 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
            </div>
          </div>
          <div className="mt-15">
            <div>
              <TabInSectionContent>Today (Mon, 28 Sep)</TabInSectionContent>
              <LineVertical />
            </div>
            <div>
              <GroupSectionTextData>
                <Circle />
                <SectionTextData>1 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
              <GroupSectionTextData>
                <Circle />
                <SectionTextData>2 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
              <GroupSectionTextData className="lastChild">
                <Circle />
                <SectionTextData>3 - 14:00</SectionTextData>
                <SectionTextData top="2.5rem">Lunch with Petr</SectionTextData>
              </GroupSectionTextData>
            </div>
          </div> */}
        </SectionContentScroll>
      </LayoutContentRight>
    </Container>
  );
}
