import React from "react";
import styled from "styled-components";

/* ===== Shell ===== */
const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MobileShell = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 12px 16px 24px;
`;

/* ===== Header (삭제/수정) ===== */
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

/* ===== Card ===== */
const Card = styled.div`
  background: #fff;
  border: 1px solid #e9eef2;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 14px;
  & + & {
    position: relative;
    margin-top: 20px;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: 0; right: 0; top: -12px;
    height: 2px;
    background: #2ec4b6;
    border-radius: 2px;
  }
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 2px 0 8px;
`;

const CardMeta = styled.div`
  font-size: 12px;
  color: #98a1a8;
`;

const CardFooter = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const CardHr = styled.div`
  height: 1px;
  background: #eceff1;
  border: 0;
  margin: 16px 0;
`;

const AssignBody = styled.div`
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
`;

/* ===== Buttons ===== */
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

const PrimaryButton = styled(Button)`
  background: #2ec4b6;
  color: #fff;
  border-color: #2ec4b6;
`;

/* ===== Submission ===== */
const SubmissionHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
`;

export const SubmissionAuthor = styled.span`
  white-space: nowrap;
  font-size: 13px;
`;

const SubmissionTime = styled.span`
  white-space: nowrap;
  margin-left: 6px;
  font-size: 12px;
  color: #98a1a8;
`;

const SubmissionActions = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
  white-space: nowrap;
`;

const Chip = styled.span`
  display: inline-block;
  padding: 4px 9px;
  font-size: 12px;
  line-height: 1;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #e3e7ec;
  color: #8b95a1;
`;

const ChipBrand = styled(Chip)`
  border-color: #2ec4b6;
  color: #1a998d;
`;

const SubmissionText = styled.div`
  font-size: 14px;
  color: #47525b;
  line-height: 1.7;
  margin: 10px 0 12px;
`;

const Attachment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px dashed #d7dee3;
  border-radius: 12px;
  background: #f5f7f9;
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

export default function LectureHomeworkDetail() {
  return (
    <PageWrap>
      <MobileShell>
        {/* 상단 타이틀 + 삭제/수정 */}
        <TopBar>
          <PageTitle>과제제출</PageTitle>
          <TopActions>
            <TopBtn>삭제</TopBtn>
            <TopBtn>수정</TopBtn>
          </TopActions>
        </TopBar>
        <PageDivider />

        {/* 과제 카드 */}
        <Card>
          <CardTitle>7주차 과제 입니다.</CardTitle>
          <CardMeta>2025-08-05 16:00 ~ 2025-08-11 23:59</CardMeta>
          <CardHr />
          <AssignBody>
            각 조는 택 1 주제를 선택하여 찬성/반대 중 하나의 입장을 정하고,
            논리적 근거를 바탕으로 토론 준비
            <br />
            팀원 간 역할 분담 (서론/논점 정리, 주장, 반론 대응 등) 필수
            <br />
            토론 직후 개인별로 간단한 자기평가서(자유양식, A4 1장 내외) 제출
          </AssignBody>

          {/* 목록 왼쪽에 제출 버튼 */}
          <CardFooter>
            <PrimaryButton>제출</PrimaryButton>
            <Button>목록</Button>
          </CardFooter>
        </Card>

        {/* 제출 카드 */}
        <Card>
          <SubmissionHead>
            <SubmissionAuthor>권오규</SubmissionAuthor>
            <SubmissionTime>제출 시간 : 2025-07-31 23:56</SubmissionTime>
            <SubmissionActions>
              <Chip>삭제</Chip>
              <ChipBrand>수정</ChipBrand>
            </SubmissionActions>
          </SubmissionHead>

          <SubmissionText>
            안녕하세요. 20220001 권오규입니다. 과제 제출합니다.
          </SubmissionText>

          <Attachment>
            <AttachmentIcon>📎</AttachmentIcon>
            <AttachmentName>자바프로그래밍 권오규 7주차.hwp</AttachmentName>
          </Attachment>
        </Card>
      </MobileShell>
    </PageWrap>
  );
}
