import React from "react";
import styled from "styled-components";

/* ===== Shell ===== */
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

/* ===== Breadcrumb ===== */
const Crumb = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #6b7680;
  font-weight: 600;
  margin: 2px 0 8px;
`;
const CrumbDim = styled.span``;
const CrumbSep = styled.span`color:#9aa5b1;`;
const CrumbAccent = styled.span`color:#2ec4b6;`;

const Divider = styled.div`
  height: 2px;
  background: #2ec4b6;
  border-radius: 2px;
  opacity: .6;
  margin-bottom: 12px;
`;

/* ===== Header line: [산출물] + 제목 ===== */
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const GrayTag = styled.span`
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 4px;
  background: #f3f5f7;
  color: #8b95a1;
  font-weight: 700;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #222;
  line-height: 1.5;
`;

/* ===== 작성자/일시 ===== */
const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #98a1a8;
  margin-top: 6px;
`;

/* ===== 얇은 구분선 ===== */
const Hr = styled.div`
  height: 1px;
  background: #eceff1;
  margin: 12px 0 14px;
`;

/* ===== 본문 ===== */
const Body = styled.div`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
`;

/* ===== 첨부 ===== */
const AttachRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8b95a1;
  font-size: 13px;
  margin-top: 16px;
`;
const Paperclip = styled.span`font-size:16px;`;
const FileName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/* ===== 하단 버튼 ===== */
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
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
const Primary = styled(Button)`
  background: #2ec4b6;
  color: #fff;
  border-color: #2ec4b6;
`;

export default function ProjectObjectDetail() {
  return (
    <PageWrap>
      <MobileShell>
        {/* breadcrumb */}
        <Crumb>
          <CrumbDim>결과물</CrumbDim>
          <CrumbSep>›</CrumbSep>
          <CrumbAccent>Camp_us</CrumbAccent>
        </Crumb>
        <Divider />

        {/* Header */}
        <TitleRow>
          <GrayTag>[산출물]</GrayTag>
          <Title>Camp_us 컴포넌트 명세서</Title>
        </TitleRow>

        <MetaRow>
          <span>김원희</span>
          <span>•</span>
          <span>2025-09-22 09:40</span>
        </MetaRow>

        <Hr />

        <Body>Camp_us 컴포넌트 명세서 입니다.</Body>

        <AttachRow>
          <Paperclip>📎</Paperclip>
          <FileName>자바프로그래밍 권오규 10주차.hwp</FileName>
        </AttachRow>

        <Hr />

        <Footer>
          <Primary>평가하기</Primary>
          <Button>목록</Button>
        </Footer>
      </MobileShell>
    </PageWrap>
  );
}
