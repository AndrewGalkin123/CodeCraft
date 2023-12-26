import { Row, Col, Divider, Typography, Flex } from "antd"

const {  Paragraph, Title } = Typography;

const AboutUsBlock = () => {
    return (
        <Row className="content">
            <Divider />
            <Col xs={24} md={{ span: 16, offset: 5 }}>
                <Title level={3}>О нас: CodeCraft</Title>
                <Paragraph style={{ fontSize: "16px" }}>Добро пожаловать в CodeCraft - ваш идеальный путеводитель в мире JavaScript! Мы являемся центром,
                    где опыт и творчество встречаются, чтобы создать уникальное пространство для ваших программистских потребностей.
                    Мы - коллектив энтузиастов и профессионалов, создавших этот ресурс, чтобы сделать ваш опыт в программировании более интересным, простым и продуктивным.</Paragraph>
                <Title level={3}>Наша История:</Title>
                <Paragraph style={{ fontSize: "16px" }}>CodeCraft начал свой путь с простой, но могущественной целью -
                    предоставить программистам, независимо от их уровня опыта, обширный и легкодоступный набор методов и подсказок в мире JavaScript.
                    Мы основывались на стремлении упростить процесс обучения и создания кода, делая его доступным для всех.
                    Мы превратились в сообщество, где обмен знаниями и вдохновением стали ключевыми составляющими нашей истории успеха.</Paragraph>
                <Title level={3}>Миссия:</Title>
                <Paragraph style={{ fontSize: "16px" }}>Мы верим, что каждый может быть успешным в мире программирования.
                    Наша миссия - быть вашим проводником в лабиринте JavaScript.
                    Мы стремимся предоставить вам не просто знания, но и инструменты, которые помогут вам воплощать в жизнь ваши идеи.
                    Мы хотим, чтобы каждый, кто посещает CodeCraft, чувствовал, что он может освоить JavaScript и использовать его в своих проектах.
                    Мы видим наше вдохновение в вашем успехе.</Paragraph>

                <Title level={3}>Команда:</Title>
                <Col md={{}}>
                    <Title level={5}>Галкин Андрей (16 лет)</Title>
                    <Paragraph style={{ fontSize: "16px" }}>Гордо представляем вам Галкина Андрея - нашего молодого виртуоза кода.
                        Несмотря на свой юный возраст, Андрей внес неоценимый вклад в развитие нашего проекта, принося свежие идеи и энтузиазм.
                        Его страсть к программированию и творческий подход делают его ключевым членом нашей команды.</Paragraph>
                </Col>
                <Paragraph style={{ fontSize: "16px" }}>Каждый член нашей команды вкладывает свой уникальный вклад в создание ресурса, который поможет вам раскрыть потенциал JavaScript.
                    Присоединяйтесь к CodeCraft и давайте вместе создадим будущее программирования, полное вдохновения и творчества!</Paragraph>
                <Paragraph style={{ fontSize: "16px" }}>Присоединяйтесь к CodeCraft - мы стремимся быть не только ресурсом, но и сообществом, где вы будете чувствовать себя как дома, окруженными единомышленниками,
                    готовыми разделять свои знания и опыт с вами.</Paragraph>
                <Flex>
                    <Title level={3}>Контакты: </Title>
                    <div className="social-icons">
                    <a href="https://web.telegram.org/k/#@moruuuuuuuuu" target="_blank"><i class="fab fa-telegram"></i></a>
                    <a href="https://twitter.com/Moru129" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/remnantabuzer/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://github.com/AndrewGalkin123" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="mailto:127788127788a@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a>
                    </div>
                </Flex>
            </Col>
        </Row>
    )
}

export default AboutUsBlock