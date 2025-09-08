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
  display: flex;
  gap: 8px;
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

const Card = styled.div`
  background: #fff;
  border: 1px solid #e9eef2;
  border-radius: 12px;
  padding: 16px;
`;

const CardHead = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const CardTitle = styled.h3`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 6px;
  line-height: 1.4;
`;

const ViewCount = styled.span`
  white-space: nowrap;
  font-size: 12px;
  color: #98a1a8;
`;

const DateText = styled.div`
  font-size: 12px;
  color: #98a1a8;
  margin-bottom: 12px;
`;

const CardHr = styled.div`
  height: 1px;
  background: #eceff1;
  border: 0;
  margin: 12px 0 14px;
`;

const BodyText = styled.div`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
`;

const Attachment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px dashed #d7dee3;
  border-radius: 12px;
  background: #f5f7f9;
  margin-top: 14px;
`;

const AttachmentIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #e3e7ec;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  font-size: 14px;
`;

const AttachmentName = styled.div`
  font-size: 13px;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
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

function LectureNoticeDetail() {
  return (
    <PageWrap>
      <MobileShell>
        <TopBar>
          <PageTitle>공지사항</PageTitle>
          <TopActions>
            <TopBtn>삭제</TopBtn>
            <TopBtn>수정</TopBtn>
          </TopActions>
        </TopBar>
        <PageDivider />

        <Card>
          <CardHead>
            <CardTitle>로그인 비밀번호 초기화 안내</CardTitle>
            <ViewCount>조회수: 341</ViewCount>
          </CardHead>

          <DateText>2025-09-01</DateText>

          <CardHr />

          <BodyText>
            로그인을 위해 시스템 비밀번호 초기화 후 로그인 해주시기 바랍니다.
            {"\n\n"}-권장 브라우저: 크롬(portal.aaa.ac.kr)
          </BodyText>

          <Attachment>
            <AttachmentIcon>📎</AttachmentIcon>
            <AttachmentName>첨부파일.pdf</AttachmentName>
          </Attachment>

          <CardFooter>
            <Button>목록</Button>
          </CardFooter>
        </Card>
      </MobileShell>
    </PageWrap>
  );
}

export default LectureNoticeDetail