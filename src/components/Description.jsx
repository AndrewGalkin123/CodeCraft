import { Divider,Typography } from 'antd'

const Description = ({description}) => {
    return (
            <div style={{ padding: '20px' }}>
                <Typography.Title level={3}>{description}</Typography.Title>
            </div>
    )
}

export default Description