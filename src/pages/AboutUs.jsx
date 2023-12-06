import Header from "../components/Header"
import AboutUsBlock from "../components/AbousUsBlock"
import logo from "./панда.jpg"

const AboutUs = () => {
    return (
        <>
            <Header/>
            <AboutUsBlock image={logo}/>
        </>
    )
}

export default AboutUs