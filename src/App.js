import './App.css';
import NavBar from './Components/Common/NavBar';
import { Row,Col, } from 'reactstrap';
import { Route, Routes } from "react-router-dom";
import MainHome from './Components/Pages/MainHome';
import Login from './Components/Pages/LoginPage';
import UserInfo from './Components/Pages/UserInfoPage';

function App() {
  return (
    <div className="App">


  <NavBar/>
  {/* <Row>
    <Col xs='6'>
  <ContactForm/>
  </Col>
  <Col xs='6'>
   <ContactCards/>
</Col>
</Row> */}
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<MainHome/>} />
          <Route path="/userinfo/:id" element={<UserInfo/>} />
        </Routes>  


    </div>
  );
}

export default App;
