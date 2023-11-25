import { Divider,Typography } from 'antd'

const Header = ({title}) => {
    return (
        <>
            <header style={{padding: "0 20px"}}><Typography.Title level={3}>{title}</Typography.Title></header>
            <Divider></Divider>
        </>
    )
}

export default Header