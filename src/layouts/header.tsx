import { GoPerson } from "react-icons/go"
import { Button } from "../components/button"
import { Container } from "../widgets/container"
import Logo from "./../assets/logo.svg"
import { Link } from "react-router"
import { RiShoppingCart2Line } from "react-icons/ri"
import { useAuth } from "../stores/auth.store"
import { Routers } from "../configs/router.config"

export const Header = () => {
    const user = useAuth(state => state.user)

    const logout = useAuth(state => state.handleLogout)

    return <header
        className="pt-[44px] pb-[25px]"
    >
        <Container>
            <div className="flex items-center justify-between">
                <Link to={Routers.home} className="inline-block w-[100px]">
                    <img
                        src={Logo}
                        alt="Логотип"
                    />
                </Link>

                <div className="space-x-2">

                    {
                        user.email ? <Button color="blue" onClick={logout}>
                            Выйти
                        </Button>
                            : <Link to={Routers.login}>
                                <Button color="blue">
                                    <GoPerson />

                                    <span>
                                        Войти
                                    </span>
                                </Button>
                            </Link>
                    }

                    <Link to={Routers.cart}>
                        <Button color="white">
                            <RiShoppingCart2Line />

                            <span>
                                Корзина
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    </header>
}