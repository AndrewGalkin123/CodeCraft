import { Divider, Typography } from 'antd'

const Description = ({ title, description, example }) => {


    return (
        <div style={{ padding: '20px' }}>
            <Typography.Title level={2}>{title}</Typography.Title>
            <Divider />
            <Typography.Paragraph>{description}</Typography.Paragraph>

            {example.map(el => <><Typography.Text code>{el}</Typography.Text><br/></>)}


        </div>
    );
};

export default Description;
