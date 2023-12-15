// CoursesPage.js
import React, { useState } from "react";
import { Divider } from "antd";
import Header from "../../components/Header";
import CoursesMenu from "./components/CoursesMenu";
import { Row, Col } from "antd";
import Content from "./components/Content";


const CoursesPage = () => {
  const [selectedItem, setSelectedItem] = useState(["htmlLesson1", "HTML"]);
 

 
  const handleMenuItemClick = (key) => {
    setSelectedItem(key);
  };

  return (
    <>
      <Header />
      <Divider />
      <Row>
        <Col xs={10} md={3}>
          <CoursesMenu onMenuItemClick={handleMenuItemClick} />
        </Col>
        <Col xs={14} md={21}>
          <Content selectedItem={selectedItem}/>
        </Col>
      </Row>
    </>
  );
};

export default CoursesPage;
