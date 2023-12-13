import { Flex, Typography } from "antd";

const { Paragraph, Title, Text } = Typography;

const Content = ({ videoURL, introduction, title, paragraph1, paragraph2 }) => {
  const textStyle = { fontSize: '16px' };
  return (
        <Flex vertical style={{ padding: "20px" }}>
            <Title>{title}</Title>
            <Text style={textStyle}>{paragraph1}</Text>
            <Title level={3}>Видеоурок</Title>
            <iframe
                width="900px"
                height="500px"
                src={videoURL}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            />
            <Text style={textStyle}>{introduction}</Text>
            <Title level={3}>Информация</Title>
            <Text style={textStyle}>{paragraph2}</Text>
            <Title level={3}>Важный момент</Title>
            <Title level={3}>Итог за пройденный урок</Title>
            <Title level={3}>Задание к уроку</Title>
        </Flex> 
  );
};

export default Content;
