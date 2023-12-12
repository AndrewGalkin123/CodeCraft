import { Flex, Typography } from "antd"

const Content = ({videoURL , introduction}) => {
    return ( 
        <Flex justify="center">
            <iframe width="900px" height="500px" 
                src={videoURL} title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
            />

        </Flex>
    )
}

export default Content