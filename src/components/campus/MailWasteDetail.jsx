import React, { useState, useEffect } from "react";
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

/* ===== Header ===== */
const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 6px 0 6px;
`;
const CloseBtn = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #e1e7ec;
  background: #fff;
  color: #5f6b72;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
`;
const PageTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const TopActions = styled.div`
  margin-left: auto;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 10px;
  font-size: 12px;
  color: #98a1a8;
  gap: 8px;
`;
const TimeText = styled.div`
  flex: 1;
`;
const SmallBtn = styled.button`
  height: 22px;
  padding: 0 8px;
  font-size: 11px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 6px;
  cursor: pointer;
`;

const PageDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  opacity: .6;
  border-radius: 2px;
  margin-bottom: 14px;
`;

/* ===== Card ===== */
const Card = styled.div`
  background: #fff;
  border: 1px solid #e9eef2;
  border-radius: 12px;
  padding: 16px;
`;
const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;
const StarBtn = styled.button`
  padding: 0;
  margin: 0;
  width: 22px;
  height: 22px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const StarImg = styled.img`
  width: 22px;
  height: 22px;
  display: block;
`;
const MailTitle = styled.h3`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 2px;
  line-height: 1.4;
`;

const CardHr = styled.div`
  height: 1px;
  background: #eceff1;
  border: 0;
  margin: 12px 0 14px;
`;

/* ===== Meta ===== */
const Meta = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  row-gap: 8px;
  column-gap: 8px;
`;
const MetaLabel = styled.div`
  font-size: 12px;
  color: #98a1a8;
  line-height: 28px;
`;
const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #DFFCF9;
  border: 1px solid #e0e7ec;
  font-size: 12px;
  color: #1f2937;
`;
const ChipName = styled.span`
  font-weight: 600;
`;
const ChipEmail = styled.span`
  color: #6b7680;
`;

const BodyText = styled.div`
  min-height: 120px;
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
  margin-top: 14px;
`;

/* ===== Attachment ===== */
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

/* ===== Footer ===== */
const CardFooter = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
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

export default function MailWasteDetail({ onClose }) {
  const [isStarred, setIsStarred] = useState(false);
  const receivedAt = "2025-08-29 21:49";

  useEffect(() => {
    const saved = localStorage.getItem("mail-starred:LMS-0829");
    if (saved === "1") setIsStarred(true);
  }, []);
  useEffect(() => {
    localStorage.setItem("mail-starred:LMS-0829", isStarred ? "1" : "0");
  }, [isStarred]);

  const toggleStar = () => setIsStarred(v => !v);

  const handleClose = () => {
    if (onClose) onClose();
    else window.history.back();
  };

  const handleRestore = () => {
    if (window.confirm("이 메일을 복구할까요?")) {
      alert("복구되었습니다.");
      // TODO: 복구 API 호출 후 목록으로 이동
    }
  };

  const handleDeleteForever = () => {
    if (window.confirm("영구 삭제하면 복구할 수 없습니다. 삭제하시겠습니까?")) {
      alert("영구 삭제되었습니다.");
      // TODO: 영구삭제 API 호출 후 목록으로 이동
    }
  };

  return (
    <PageWrap>
      <MobileShell>
        <TopBar>
          <CloseBtn aria-label="닫기" onClick={handleClose}>✕</CloseBtn>
          <PageTitle>휴지통</PageTitle>
          <TopActions />
        </TopBar>

        {/* 시간 + 우측 액션(복구 / 영구삭제) */}
        <SubHeader>
          <TimeText>{receivedAt}</TimeText>
          <SmallBtn onClick={handleRestore}>복구</SmallBtn>
          <SmallBtn onClick={handleDeleteForever}>영구삭제</SmallBtn>
        </SubHeader>

        <PageDivider />

        <Card>
          <TitleRow>
            <StarBtn
              aria-label={isStarred ? "즐겨찾기 해제" : "즐겨찾기 추가"}
              aria-pressed={isStarred}
              onClick={toggleStar}
            >
              <StarImg
                src={isStarred ? "/img/staron.png" : "/img/star.png"}
                alt="star"
              />
            </StarBtn>
            <div style={{ flex: 1 }}>
              <MailTitle>LMS 자료 접근 확인 요청</MailTitle>
            </div>
          </TitleRow>

          <CardHr />

          <Meta>
            <MetaLabel>보낸 사람</MetaLabel>
            <ChipRow>
              <Chip>
                <ChipName>한서윤</ChipName>
                <ChipEmail>20220025@campus.com</ChipEmail>
              </Chip>
            </ChipRow>

            <MetaLabel>받는 사람</MetaLabel>
            <ChipRow>
              <Chip>
                <ChipName>김민준</ChipName>
                <ChipEmail>20220001@campus.com</ChipEmail>
              </Chip>
            </ChipRow>
          </Meta>

          <BodyText>{"LMS 자료 접근 가능 여부 확인 부탁드립니다."}</BodyText>

          <Attachment>
            <AttachmentIcon>📎</AttachmentIcon>
            <AttachmentName>자바프로그래밍 권오규 10주차.hwp</AttachmentName>
          </Attachment>

          <CardFooter>
            <Button onClick={handleClose}>목록</Button>
          </CardFooter>
        </Card>
      </MobileShell>
    </PageWrap>
  );
}
