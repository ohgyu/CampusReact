import React from "react";
import styled from "styled-components";

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fafbfc;
`;
const MobileShell = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 12px 16px 24px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0 10px;
`;
const PageTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const TopActions = styled.div`
  margin-left: auto;
`;
const TopBtn = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 8px;
  cursor: pointer;
`;
const PageDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  opacity: .6;
  border-radius: 2px;
  margin-bottom: 14px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
`;
const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #98a1a8;
`;
const CardHr = styled.div`
  height: 1px;
  background: #eceff1;
  border: 0;
  margin: 12px 0 14px;
`;

const VideoWrap = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
  border: 1px solid #e9eef2;
`;
const VideoTag = styled.video`
  display: block;
  width: 100%;
  height: auto;
`;

const Desc = styled.p`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  margin: 12px 0 0;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;
const Button = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 8px;
  cursor: pointer;
`;

export default function LectureOnlineDetail({
  weekLabel = "1주차",
  period = "2025-09-02 ~ 2025-09-03",
  title = "객체지향 핵심 이해",
  description = "자바로 배우는 고급 프로그래밍 수업",
  videoSrc = "/video/Lecture1.mp4",  
  posterSrc = "", 
}) {
  return (
    <PageWrap>
      <MobileShell>
        <TopBar>
          <PageTitle>온라인 강의</PageTitle>
          <TopActions><TopBtn>수정</TopBtn></TopActions>
        </TopBar>
        <PageDivider />

        <Title>{title}</Title>
        <MetaRow>
          <span>{weekLabel}</span>
          <span>{period}</span>
        </MetaRow>

        <CardHr />

        <VideoWrap>
          <VideoTag
            controls
            preload="metadata"
            poster={posterSrc}
            src={videoSrc}
          />
        </VideoWrap>

        <Desc>{description}</Desc>

        <CardHr />

        <Footer>
          <Button>목록</Button>
        </Footer>
      </MobileShell>
    </PageWrap>
  );
}
