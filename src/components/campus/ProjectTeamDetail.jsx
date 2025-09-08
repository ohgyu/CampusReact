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

/* ===== Header ===== */
const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 6px 0 4px; /* 살짝 촘촘하게 */
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

/* 제목 줄: X와 분리된 독립 라인 */
const TitleHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 가운데 칸이 항상 정확히 중앙 */
  align-items: center;
  margin: 0 0 6px;
`;
const Semester = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #6b7680;
  justify-self: start;
`;
const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  text-align: center;
  justify-self: center;
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

/* ===== Detail Grid ===== */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  row-gap: 12px;
  column-gap: 8px;
`;
const Label = styled.div`
  font-size: 13px;
  color: #6b7680;
  font-weight: 700;
`;
const Value = styled.div`
  font-size: 13px;
  color: #4b5563;
`;

const Body = styled.div`
  margin-top: 6px;
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
`;

/* ===== Footer ===== */
const SoftDivider = styled.div`
  height: 1px;
  background: #eceff1;
  border: 0;
  margin: 14px 0;
`;
const Footer = styled.div`
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

export default function ProjectTeamDetail({
  onClose,
  onDelete,
  data = {
    semester: "2학기",
    title: "클라우드 기반 협업 플랫폼",
    period: "2025-08-26 ~ 2025-08-26",
    professor: "서형원",
    leader: "김원희",
    members: "권오규, 김민주, 김선범",
    content: "내용입니다.",
  },
}) {
  const handleClose = () => (onClose ? onClose() : window.history.back());
  const handleDelete = () => {
    if (window.confirm("이 프로젝트를 삭제할까요?")) {
      onDelete ? onDelete(data) : alert("삭제되었습니다.");
    }
  };

  return (
    <PageWrap>
      <MobileShell>
        {/* 1줄: X 버튼만 */}
        <TopBar>
          <CloseBtn aria-label="닫기" onClick={handleClose}>✕</CloseBtn>
        </TopBar>

        {/* 2줄: 좌측 학기 / 중앙 제목 */}
        <TitleHeader>
          <Semester>{data.semester}</Semester>
          <HeaderTitle>{data.title}</HeaderTitle>
          <span /> {/* 오른쪽 빈칸(균형용) */}
        </TitleHeader>

        <PageDivider />

        <Card>
          <Grid>
            <Label>기간</Label>
            <Value>{data.period}</Value>

            <Label>담당교수</Label>
            <Value>{data.professor}</Value>

            <Label>팀장</Label>
            <Value>{data.leader}</Value>

            <Label>팀원</Label>
            <Value>{data.members}</Value>

            <Label>내용</Label>
            <Value>
              <Body style={{ minHeight: "150px" }}>{data.content}</Body>
            </Value>
          </Grid>

          <SoftDivider />

          <Footer>
            <Button onClick={handleDelete}>삭제</Button>
          </Footer>
        </Card>
      </MobileShell>
    </PageWrap>
  );
}
