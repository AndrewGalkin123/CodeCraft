import { Menu } from 'antd'
import { CodeOutlined } from '@ant-design/icons';

const _Menu = ({ methods, onSelect }) => {
    const handleMenuClick = (e) => {
        const selectedMethod = e.key;
        onSelect(selectedMethod);
    };

    return (
        <Menu
            mode="vertical"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            theme="light"
            onClick={handleMenuClick}
        >
            {
                methods.map(method => <Menu.Item icon={<CodeOutlined />} key={method}>{method}</Menu.Item>)
            }
        </Menu>
    )
}

export default _Menu