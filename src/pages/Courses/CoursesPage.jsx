import { useState } from "react";
import { Divider } from "antd";
import Header from "../../components/Header";
import CoursesMenu from "./components/CoursesMenu";
import { Row, Col } from "antd";
import Content from "./components/Content";
import coursesContent from "./coursesContent";

const CoursesPage = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleMenuClick = (lessonKey) => {
    setSelectedLesson(lessonKey);
  };

  return (
    <>
      <Header />
      <Divider />
      <Row>
        <Col xs={10} md={3}>
          <CoursesMenu onSelect={handleMenuClick} />
        </Col>
        <Col xs={14} md={21}>
          {selectedLesson && (
            <Content
             
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default CoursesPage;
