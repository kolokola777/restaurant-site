import { Banner } from "./banner"
import { Lists } from "./lists"
import { Helmet } from "react-helmet";

export const HomePage = () => {
    return <div className="bg-gradient-to-b from-white to-[#F5F5F5] pb-[90px]">
        <Helmet>
            <title>
                Главная страница
            </title>
        </Helmet>

        <Banner />

        <Lists />
    </div>
}