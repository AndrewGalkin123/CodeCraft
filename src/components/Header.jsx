import {Typography, Row, Col } from 'antd'
import Navigation from './Navigation'

const Header = ({title}) => {
    return (
        <header style={{ padding: "20px 20px 0" }}>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col xs={21}>
                    <Typography.Title level={2}>{title}</Typography.Title>
                </Col>
                <Col xs={3}>
                    <Navigation />
                </Col>

            </Row>


        </header>
    )
}

export default Header;