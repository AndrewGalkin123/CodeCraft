import {useState} from "react"
import { Divider } from "antd"
import Header from "../../components/Header"
import CoursesMenu from "./components/CoursesMenu"
import { Row, Col} from "antd"
import Content from "./components/Content"

const CoursesPage = () => {
    const [videoURl, setVideoURL] = useState("https://www.youtube.com/embed/h3EJICKwITw?si=y-_trxRiK5ECiLjg")

    return(
        <>
            <Header/>
            <Divider/>
           
            <Row>
                <Col xs={10} md={3}>
                    <CoursesMenu/>
                </Col>
                <Col xs={14} md={21}>
                    
                    <Content
                        videoURL={videoURl}
                        introduction="bsadaad"
                    />
                </Col>
            </Row>
            
        </>
    )
}

export default CoursesPage