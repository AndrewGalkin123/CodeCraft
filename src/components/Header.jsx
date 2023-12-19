import {Typography, Row, Col } from 'antd'
import Navigation from './Navigation'

const Header = () => {
  
    const items = [
        {
            title: <a href="/">Home</a>,
        },
        {   
            title: <a href="/about-us">About us</a>,
        },
        {   
            title: <a href="/more-info">More info</a>,
        },
        {
            title: <a href="/courses">Courses</a>,
        }
    ];
    return (
        <header style={{ padding: "20px 20px 0" }}>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col xs={20}>
                <a href='/'><Typography.Title level={2}>CodeCraft</Typography.Title></a>
                </Col>
                <Col xs={4}>
                    <Navigation items={items}/>
                </Col>

            </Row>


        </header>
    )
}

export default Header;