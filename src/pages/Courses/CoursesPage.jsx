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
           
            <Row >
                <Col xs={10} md={3}>
                    <CoursesMenu/>
                </Col>
                <Col xs={14} md={21}>
                    
                    <Content
                        videoURL={videoURl}
                        introduction="bsadaad"
                        title="#1 – Что такое HTML5?"
                        paragraph1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, qui. Dolores fugit cupiditate pariatur nam rem repellendus earum aliquid consectetur non porro optio atque omnis veniam, laborum velit voluptas minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, qui. Dolores fugit cupiditate pariatur nam rem repellendus earum aliquid consectetur non porro optio atque omnis veniam, laborum velit voluptas minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, qui. Dolores fugit cupiditate pariatur nam rem repellendus earum aliquid consectetur non porro optio atque omnis veniam, laborum velit voluptas minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, qui. Dolores fugit cupiditate pariatur nam rem repellendus earum aliquid consectetur non porro optio atque omnis veniam, laborum velit voluptas minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, qui. Dolores fugit cupiditate pariatur nam rem repellendus earum aliquid consectetur non porro optio atque omnis veniam, laborum velit voluptas minima."
                    />
                </Col>
                
            </Row>
            
        </>
    )
}

export default CoursesPage