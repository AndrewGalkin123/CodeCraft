import { Divider, Typography } from 'antd'

const Description = ({ title, description, example }) => {


    return (
        <div style={{ padding: '20px' }}>
            <Typography.Title level={2}>{title}</Typography.Title>
            <Divider />
            <Typography.Paragraph>{description}</Typography.Paragraph>
            <Typography.Text code>
               {example}
            </Typography.Text>
        </div>
    );
};

export default Description;
