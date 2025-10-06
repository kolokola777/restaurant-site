import { RiShoppingCart2Line } from "react-icons/ri";
import { Button } from "../../../components/button";
import { toMoney } from "../../../lib/util";
import { useCart } from "react-use-cart";

export const ListItem = ({
    description, image, price, title, id
}: Props) => {

    const { addItem } = useCart()

    const onAdd = () => {
        addItem({
            id: id.toString(),
            name: title,
            price,
            quantity: 1,
            image,
            description
        })
    }

    return <li>
        <div className="bg-white overflow-hidden rounded-[7px]">
            {/* Image */}
            <div className="overflow-hidden h-[212px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}

            <div className="px-5 pt-5 pb-8">

                <h3 className="text-[24px] mb-[10px]">
                    {title}
                </h3>

                <p className="text-lg text-[#8C8C8C] mb-[24px]">
                    {description}
                </p>

                <div className="flex gap-[30px] items-center">
                    <Button
                        color="blue"
                        onClick={onAdd}
                    >
                        <span>
                            В корзину
                        </span>

                        <RiShoppingCart2Line />
                    </Button>

                    <strong className="text-xl font-bold">
                        {toMoney(price)}
                    </strong>
                </div>

            </div>
        </div>
    </li>
}

interface Props {
    image: string;
    title: string;
    description: string;
    price: number;
    id: number;
}