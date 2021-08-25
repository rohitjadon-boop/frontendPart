import "./index.css";
import About from "./components/about/About";
import AddCourse from "./components/addcourse/AddCourse";
import AllCourses from "./components/allcourses/AllCourses";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Header heading="Welcome To Pepcoding" />
      <Container>
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add-course" component={AddCourse} />
              <Route exact path="/view-courses" component={AllCourses} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  )
}

export default App;