import { Divider, Typography, Input, Row, Col } from 'antd'
import Navigation from './Navigation';

const { Search } = Input;
const Header = ({ title, search }) => {
    return (
        <>
            <header style={{padding: "20px"}}>
                    <Row>
                        <Col  xs={21}>
                            <Typography.Title level={2}>{title}</Typography.Title>
                        </Col>
                        <Col xs={3}>
                            <Navigation />
                        </Col>

                    </Row>

                <Search
                    placeholder="Search methods"
                    allowClear
                    enterButton="Search"
                    size="medium"
                    onChange={search}
                />
            </header>
            <Divider></Divider>

        </>
    )
}

export default Header