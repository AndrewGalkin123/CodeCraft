import React from "react";
import { Flex, Typography } from "antd";
import coursesContent from "../coursesContent"

const { Title, Text } = Typography;

const Content = ({ selectedItem }) => {
  const textStyle = {"fontSize" : "16px"}
  const content = coursesContent[selectedItem[1]][selectedItem[0]];


  return (
    <Flex vertical style={{ padding: "20px" }}>
      <Title>{content.title}</Title>
      <Text style={textStyle}>{content.paragraph1}</Text>
      <Title level={3}>Видеоурок</Title>
      <iframe
        width="900px"
        height="500px"
        src={content.videoURL}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <Text style={textStyle}>{content.introduction}</Text>
      <Title level={3}>Информация</Title>
      <Text style={textStyle}>{content.paragraph2}</Text>
      <Title level={3}>Важный момент</Title>
      <Title level={3}>Итог за пройденный урок</Title>
      <Title level={3}>Задание к уроку</Title>
    </Flex>
  );
};

export default Content;
