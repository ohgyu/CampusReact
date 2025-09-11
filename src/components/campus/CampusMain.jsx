import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import TopNav from './TopNav'
import LectureNoticeDetail from './LectureNoticeDetail'
import LectureAttendenceModify from './LectureAttendenceModify'
import LecturePdsDetail from './LecturePdsDetail'
import LectureHomeworkDetail from './LectureHomeworkDetail'
import ProjectObjectDetail from './ProjectObjectDetail'
import LectureOnlineDetail from './LectureOnlineDetail'
import MailDetail from './Maildetail'
import MailWasteDetail from './MailWasteDetail'
import ProjectTeamDetail from './ProjectTeamDetail'
import LectureHomeworkDetailFeedback from './LectureHomeworkDetailFeedback'
import LectureHoneworkProDetail from './LectureHomeworkProDetail'
import LectureHomeworkStuDetail from './LectureHomeworkStuDetail'
import ProjectObjectDetailFeedback from './ProjectObjectDetailFeedback'
import BoardDetail from './BoardDetail'
import LectureHomeworkStuDetailFeedbackSubmit from './LectureHomeworkStuDetailFeedbackSubmit'


const Container = styled.div`
    width: 100vw;
`
const HeadMenu = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    padding: .5rem .5rem;
    flex-flow: row nowrap;
    justify-content: flex-start;
    border-bottom: 1px solid #dee2e6;
    z-index: 1034;
    background-color: #fff;
    color: #1f2d3d;
    transition: margin-left .3s ease-in-out;
    margin-left: 250px;
    height: 70px;
`
const MailMenu = styled.div`
  width: 100%;
`
function CampusMain() {

  return (
    <BrowserRouter>
   
        <Container>
          <TopNav></TopNav>
          <LectureHomeworkDetail></LectureHomeworkDetail>
        </Container>

    </BrowserRouter>
  )
}

export default CampusMain