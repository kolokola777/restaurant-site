import { Container } from "../widgets/container"
import Logo from "./../assets/logo.svg"
import { Link } from "react-router"
import Facebook from "./../assets/facebook.svg"
import Insta from "./../assets/instagram.svg"
import Vk from "./../assets/vk.svg"

export const Footer = () => {
    return <footer className="bg-white py-[60px]">
        <Container>
            <div className="flex justify-between">
                {/* Left */}

                <div className="flex items-center gap-[35px]">

                    <Link
                        to={"/"}
                        className="inline-block w-[100px]"
                    >
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <nav className="space-x-4">
                        <Link to="#!" className="inline-block">
                            Ресторанам
                        </Link>
                        <Link to="#!" className="inline-block">
                            Курьерам
                        </Link>
                        <Link to="#!" className="inline-block">
                            Пресс-центр
                        </Link>
                        <Link to="#!" className="inline-block">
                            Контакты
                        </Link>
                    </nav>
                </div>

                {/* Right */}

                <div className="flex gap-5 items-center">
                    <a href="#!" className="inline-block">
                        <img src={Insta} alt="instagram" />
                    </a>
                    <a href="#!" className="inline-block">
                        <img src={Facebook} alt="facebook" />
                    </a>
                    <a href="#!" className="inline-block">
                        <img src={Vk} alt="vk" />
                    </a>
                </div>
            </div>
        </Container>
    </footer>
}