import { Breadcrumb } from 'antd'


const items = [
    {
        title: <a href="/">Home</a>,
    },
    {   
        title: <a href="/about-us">About us</a>,
    },
    {   
        title: <a href="">More info</a>,
    }
];


const Navigation = () => {
    return (
        <Breadcrumb  items={items} />
    )
}

export default Navigation