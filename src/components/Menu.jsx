import { Menu } from 'antd'
import { CodeOutlined } from '@ant-design/icons';

const _Menu = ({methods}) => {


    return (
        <Menu
            mode="vertical"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            theme="light"
        >
           {
            methods.map(method => <Menu.Item icon={<CodeOutlined/>} key={method}>{method}</Menu.Item>)
           }
        </Menu>
    )
}

export default _Menu