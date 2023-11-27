import { Divider, Input } from 'antd'
import Header from './Header';

const { Search } = Input;

const MainHeader = ({ title, search }) => {
    return (
        <>
           <Header title={title}></Header>
            <Search
                style={{width: "98%", margin: "0 20px"}}
                placeholder="Search methods"
                allowClear
                enterButton="Search"
                size="medium"
                onChange={search}
            />
            <Divider></Divider>

        </>
    )
}

export default MainHeader