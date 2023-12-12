import { Flex, Typography } from "antd"

const { Paragraph, Title, Text } = Typography;

const Content = ({videoURL , introduction}) => {
    return ( 
        <Flex vertical>
            <Flex horizontal justify="space-around" align="center">
                <iframe width="900px" height="500px" 
                    src={videoURL} title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                />
                <Text>{introduction}</Text>
            </Flex>
        </Flex>
    )
}

export default Content