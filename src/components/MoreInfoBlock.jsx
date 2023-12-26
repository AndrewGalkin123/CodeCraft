import { Row, Col, Divider, Typography } from "antd"

const { Paragraph, Title } = Typography;

const MoreInfoBlock = () => {
    const paragraphStyle = { fontSize: '16px' }

    return (
        <Row className="content">
            <Divider />
            <Col md={{ span: 20, offset: 3 }}>
                <Title level={3}>Дополнительная информация (More Info)</Title>
                <Paragraph style={paragraphStyle}>Добро пожаловать в раздел "Дополнительная информация" CodeCraft!
                    Здесь мы предоставляем еще больше данных о нас, наших целях и том, как вы можете взаимодействовать с нашим сообществом.</Paragraph>
                <Title level={4}>1. Наши Проекты:</Title>
                <Paragraph style={paragraphStyle}>Узнайте больше о проектах, над которыми работает команда CodeCraft. М
                    ы представляем не только обучающий контент, но и вдохновляющие проекты, в которых каждый может принять участие.</Paragraph>
                <Title level={4}>2. Обучающие Материалы:</Title>
                <Paragraph style={paragraphStyle}>Исследуйте наши обширные обучающие материалы, предназначенные для программистов всех уровней.
                    Здесь вы найдете статьи, видеоуроки и практические задания, помогающие вам расширить свои навыки.</Paragraph>
                <Title level={4}>3. Свяжитесь с Нами:</Title>
                <Paragraph style={paragraphStyle}>Есть вопросы или предложения? Здесь вы найдете контактную информацию для связи с нами.
                    Мы ценим обратную связь наших пользователей и готовы помочь вам в любых вопросах.</Paragraph>
                <Title level={4}>4. Партнерство и Сотрудничество:</Title>
                <Paragraph style={paragraphStyle}>Если вы представляете компанию или проект, и вам интересно сотрудничество с CodeCraft,
                    ознакомьтесь с информацией о партнерстве и возможностях сотрудничества.</Paragraph>
                <Title level={4}>5. Социальные Сети:</Title>
                <Paragraph style={paragraphStyle}>Присоединяйтесь к нам в социальных сетях! Следите за нашими новостями,
                    участвуйте в обсуждениях и будьте в курсе последних трендов в мире программирования.</Paragraph>
            </Col>
            <Divider />
            <Col md={{ span: 18, offset: 3 }}>
                <Paragraph style={{ fontSize: "18px" }}>
                    Благодарим вас за интерес к CodeCraft! Мы стремимся быть не только платформой для обучения, но и активным и
                    вдохновляющим сообществом. Узнайте больше, и давайте сделаем вместе программирование увлекательным и доступным для всех!
                </Paragraph>
            </Col>
        </Row>
    )
}

export default MoreInfoBlock