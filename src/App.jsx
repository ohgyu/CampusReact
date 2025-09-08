import { createGlobalStyle } from 'styled-components';
import LectureHomeworkDetail from "./components/campus/LectureHomeworkdetail"
import TopNav from "./components/campus/TopNav"
import List from './components/campus/List';
import Login from './components/campus/Login';
import LectureNoticeDetail from './components/campus/LectureNoticeDetail';
import LecturePdsDetail from './components/campus/LecturePdsDetail';
import ProjectObjectDetail from './components/campus/ProjectObjectDetail';
import LectureOnlineDetail from './components/campus/LectureOnlineDetail';
import MailDetail from './components/campus/Maildetail';
import MailWasteDetail from './components/campus/MailWasteDetail';
import ProjectTeamDetail from './components/campus/ProjectTeamDetail';
import LectureHomeworkDetailFeedback from './components/campus/LectureHomeworkDetailFeedback';
import LectureHoneworkProDetail from './components/campus/LectureHomeworkProDetail';

const GlobaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  `

function App() {
return (
  <>
  <GlobaStyle/>
  <TopNav/>
  <LectureHoneworkProDetail/>
  </>
)
}

export default App
