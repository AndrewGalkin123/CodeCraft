import { Divider, Typography } from 'antd'

const Description = ({ title, description, syntax, basicExample, basicExampleResult, cycleExample, cycleExampleResult }) => {
    return (
        <div style={{ padding: '20px' }}>
            <Typography.Title level={2}>{title}</Typography.Title>
            <Divider />
            <Typography.Paragraph style={{ fontSize: "18px" }}>{description[0]}</Typography.Paragraph>



            <Typography.Title level={3}>Синтаксис:</Typography.Title>
            <div className='code'>
                {syntax}
            </div><br></br>
            <Typography.Title level={3}>Базовый пример:</Typography.Title>
            <div className="code">
                {basicExample.map(el => <>{el}<br/></>)}
            </div><br />
            <Typography.Title level={3}>Результат:</Typography.Title>
            <div className="code">
                {basicExampleResult.map(el => <>{el}<br/></>)}
            </div><br />
            <Typography.Title level={3}>Использование в цикле:</Typography.Title>
            <div className="code">
                {cycleExample.map(el => <>{el}<br/></>)}
            </div><br />
            <Typography.Title level={3}>Результат:</Typography.Title>
            <div className="code">
                {cycleExampleResult.map(el => <>{el}<br/></>)}
            </div><br />
            <Typography.Paragraph style={{ fontSize: "18px" }}>{description[1]}</Typography.Paragraph>



        </div>
    );
};

export default Description;
