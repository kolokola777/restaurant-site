import { FaStar } from "react-icons/fa6";
import { Link } from "react-router"
import type { RestaurantType } from "../../defaults/restaurant.data";

export const ListsItem = ({
    category, id, image, price, rating, time, title
}: Props) => {
    return <li>
        <Link to={"/restaurant/" + id} className="inline-block w-full">
            <div className="rounded-[7px] overflow-hidden bg-white">
                {/* Img */}

                <div className="h-[250px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}

                <div className="px-[23px] pt-[20px] pb-[34px] space-y-2.5">

                    <div className="flex justify-between items-center">
                        <h3 className="text-[24px] font-bold">
                            {title}
                        </h3>

                        <time className="rounded-[2px] px-2 py-px bg-black text-white">
                            {time} мин
                        </time>
                    </div>

                    <div className="flex items-center gap-[26px]">

                        <div className="flex gap-2 items-center text-[#FFC107]">
                            <FaStar />

                            <span className="text-[18px] font-bold">
                                {rating}
                            </span>
                        </div>

                        <div className="flex gap-2.5 items-center">
                            <span>
                                От {price} ₽
                            </span>

                            <span>
                                &bull;
                            </span>

                            <span>
                                {category}
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </Link>
    </li>
}

interface Props extends RestaurantType {}