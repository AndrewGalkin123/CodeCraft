import { Menu } from 'antd';
import { Html5Outlined, BgColorsOutlined, CodeOutlined, 
        ExperimentOutlined, GithubOutlined, GoogleOutlined,
        AntDesignOutlined } from '@ant-design/icons';

const { Item, SubMenu } = Menu;

const CoursesMenu = ({ onSelect }) => {
  const handleMenuClick = ({ key }) => {
    onSelect(key);
  };
  return (
      <Menu style={{height: "100%"}}  mode="inline"  >
        <SubMenu key={"HTML"} icon={<Html5Outlined />} title="HTML">
          <Item key="htmlLesson1">Option 9</Item>
          <Item key="htmlLesson2">Option 10</Item>
          <Item key="htmlLesson3">Option 11</Item>
          <Item key="htmlLesson4">Option 12</Item> 
        </SubMenu>
        <SubMenu key="CSS" icon={<BgColorsOutlined />} title="CSS">
          <Item key="cssLesson1">Option 9</Item>
          <Item key="cssLesson2">Option 10</Item>
          <Item key="cssLesson3">Option 11</Item>
          <Item key="cssLesson4">Option 12</Item> 
        </SubMenu>
        <SubMenu key="JavaScript" icon={<CodeOutlined />} title="JavaScript">
          <Item key="javaScriptLesson1">Option 9</Item>
          <Item key="javaScriptLesson2">Option 10</Item>
          <Item key="javaScriptLesson3">Option 11</Item>
          <Item key="javaScriptLesson4">Option 12</Item> 
        </SubMenu>
        <SubMenu key="React" icon={<ExperimentOutlined />} title="React">
          <Item key="reactLesson1">Option 9</Item>
          <Item key="reactLesson2">Option 10</Item>
          <Item key="reactLesson3">Option 11</Item>
          <Item key="reactLesson4">Option 12</Item> 
        </SubMenu>
        <SubMenu key="GitHub" icon={<GithubOutlined />} title="GitHub">
          <Item key="gitHubLesson1">Option 9</Item>
          <Item key="gitHubLesson2">Option 10</Item>
          <Item key="gitHubLesson3">Option 11</Item>
          <Item key="gitHubLesson4">Option 12</Item> 
        </SubMenu>
        <SubMenu key="Browser" icon={<GoogleOutlined />} title="Браузер и сеть">
          <Item key="browserLesson1">Option 9</Item>
          <Item key="browserLesson2">Option 10</Item>
          <Item key="browserLesson3">Option 11</Item>
          <Item key="browserLesson4">Option 12</Item> 
        </SubMenu>
        <SubMenu key="AntDesign" icon={<AntDesignOutlined />} title="Ant Design">
          <Item key="antDesignLesson1">Option 9</Item>
          <Item key="antDesignLesson2">Option 10</Item>
          <Item key="antDesignLesson3">Option 11</Item>
          <Item key="antDesignLesson4">Option 12</Item> 
        </SubMenu>
      </Menu>

  );
};

export default CoursesMenu;