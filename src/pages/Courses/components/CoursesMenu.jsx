import { Menu } from 'antd';
import { Html5Outlined, BgColorsOutlined, CodeOutlined, 
        ExperimentOutlined, GithubOutlined, GoogleOutlined,
        AntDesignOutlined } from '@ant-design/icons';



const { Item, SubMenu } = Menu;

const CoursesMenu = () => {
  return (
      <Menu  style={{ width: 256 }} mode="inline">
        <SubMenu key={"HTML"} icon={<Html5Outlined />} title="HTML">
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item> 
        </SubMenu>
        <SubMenu key="CSS" icon={<BgColorsOutlined />} title="CSS">
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item> 
        </SubMenu>
        <SubMenu key="JavaScript" icon={<CodeOutlined />} title="JavaScript">
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item> 
        </SubMenu>
        <SubMenu key="React" icon={<ExperimentOutlined />} title="React">
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item> 
        </SubMenu>
        <SubMenu key="GitHub" icon={<GithubOutlined />} title="GitHub">
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item> 
        </SubMenu>
        <SubMenu key="Browser" icon={<GoogleOutlined />} title="Браузер и сеть">
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item> 
        </SubMenu>
        <SubMenu key="AntDesign" icon={<AntDesignOutlined />} title="Ant Design">
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item> 
        </SubMenu>
      </Menu>

  );
};

export default CoursesMenu;