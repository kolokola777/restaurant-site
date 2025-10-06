import { useParams } from "react-router"
import { menuItems } from "../../../defaults/menu.data";
import { ListItem } from "./list-item";
import { Container } from "../../../widgets/container";

export const Lists = () => {
    const { id } = useParams<{ id: string }>();

    const filtered = menuItems.filter(
        item => item.restaurant_id === Number(id)
    );

    return <Container>
        <ul className="grid grid-cols-3 gap-[24px] pt-6 pb-[112px]">
            {
                filtered.map(item => <ListItem
                    key={item.id}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    title={item.name}
                    id={item.id}
                />)
            }
        </ul>
    </Container>
}