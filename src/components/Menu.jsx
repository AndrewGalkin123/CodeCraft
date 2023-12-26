import { Menu } from 'antd'
import { CodeOutlined } from '@ant-design/icons';

const _Menu = ({ methods, onSelect }) => {
    const handleMenuClick = (e) => {
        const selectedMethod = e.key;
        onSelect(selectedMethod);
    };
    // const isMobile = window.innerWidth <= 768;

    return (
        <div style={{ height: '100vh', overflowY: 'auto' }}>
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
        </div>
    )
}

export default _Menu