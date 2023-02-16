import React from 'react';
import { Container, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourses from './components/AddCourses';
import { Row, Col } from 'reactstrap';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './components/About';

function App() {

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row className="text-center">
            <Col md={4}>
              <SideMenu />
            </Col>
            <Col md={8}>
              <Routes>
              <Route exact path="/"element={<Home />} />
             
              <Route path="/add-courses"element={<AddCourses />} />
              <Route path="/view-courses"element={<AllCourses />} />
              <Route path="/about" element ={<About />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
