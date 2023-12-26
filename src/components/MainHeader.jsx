import { Divider, Input } from 'antd'
import Header from './Header';

const { Search } = Input;

const MainHeader = ({ search }) => {
    return (
        <>
           <Header/>
            <Search
                style={{width: "100%"}}
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