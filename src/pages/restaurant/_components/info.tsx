import { useParams } from "react-router"
import { restaurantData } from "../../../defaults/restaurant.data";
import { Container } from "../../../widgets/container";
import { toMoney } from "../../../lib/util";
import { Helmet } from "react-helmet";

export const Info = () => {
    const { id } = useParams<{ id: string }>();

    const restaurant = restaurantData.find(item =>
        item.id === Number(id)
    );

    if (!restaurant?.id) {
        return <p>404 - Ресторан не найдено!</p>
    }

    return <Container>
        <Helmet>
            <title>
                {restaurant.title} | Ресторан
            </title>
        </Helmet>

        <div className="flex gap-[30px] items-center">
            <h2 className="font-bold text-[36px]">
                {restaurant.title}
            </h2>

            {/* description */}

            <div className="flex gap-2.5 items-center">
                <span>
                    От {toMoney(restaurant.price)}
                </span>

                <span>
                    &bull;
                </span>

                <span>
                    {restaurant.category}
                </span>
            </div>
        </div>
    </Container>
}