
import { Menu } from 'antd';
import { Html5Outlined, BgColorsOutlined, CodeOutlined, 
        ExperimentOutlined, GithubOutlined, GoogleOutlined,
        AntDesignOutlined } from '@ant-design/icons';

const { Item, SubMenu } = Menu;
const CoursesMenu = ({ onMenuItemClick }) => {

  
  return (
    <Menu
      style={{ height: "100%" }}
      mode="inline" onClick={(e) => onMenuItemClick(e.keyPath)}>
        <SubMenu key={"HTML"} icon={<Html5Outlined />} title="HTML">
        <Item key="htmlLesson1">Урок №1</Item>
        <Item key="htmlLesson2">Урок №2</Item>
        <Item key="htmlLesson3">Урок №3</Item>
        <Item key="htmlLesson4">Урок №4</Item> 
        </SubMenu>
        <SubMenu key="CSS" icon={<BgColorsOutlined />} title="CSS">
          <Item key="cssLesson1">Урок №1</Item>
          <Item key="cssLesson2">Урок №2</Item>
          <Item key="cssLesson3">Урок №3</Item>
          <Item key="cssLesson4">Урок №4</Item> 
        </SubMenu>
        <SubMenu key="JavaScript" icon={<CodeOutlined />} title="JavaScript">
          <Item key="javaScriptLesson1">Урок №1</Item>
          <Item key="javaScriptLesson2">Урок №2</Item>
          <Item key="javaScriptLesson3">Урок №3</Item>
          <Item key="javaScriptLesson4">Урок №4</Item> 
        </SubMenu>
        <SubMenu key="React" icon={<ExperimentOutlined />} title="React">
          <Item key="reactLesson1">Урок №1</Item>
          <Item key="reactLesson2">Урок №2</Item>
          <Item key="reactLesson3">Урок №3</Item>
          <Item key="reactLesson4">Урок №4</Item> 
        </SubMenu>
        <SubMenu key="GitHub" icon={<GithubOutlined />} title="GitHub">
          <Item key="gitHubLesson1">Урок №1</Item>
          <Item key="gitHubLesson2">Урок №2</Item>
          <Item key="gitHubLesson3">Урок №3</Item>
          <Item key="gitHubLesson4">Урок №4</Item> 
        </SubMenu>
        <SubMenu key="Browser" icon={<GoogleOutlined />} title="Браузер и сеть">
          <Item key="browserLesson1">Урок №1</Item>
          <Item key="browserLesson2">Урок №2</Item>
          <Item key="browserLesson3">Урок №3</Item>
          <Item key="browserLesson4">Урок №4</Item> 
        </SubMenu>
        <SubMenu key="AntDesign" icon={<AntDesignOutlined />} title="Ant Design">
          <Item key="antDesignLesson1">Урок №1</Item>
          <Item key="antDesignLesson2">Урок №2</Item>
          <Item key="antDesignLesson3">Урок №3</Item>
          <Item key="antDesignLesson4">Урок №4</Item> 
        </SubMenu>
      </Menu>

  );
  
};

export default CoursesMenu;