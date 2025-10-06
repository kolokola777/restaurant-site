import Pic1 from "./../assets/1.png"
import Pic2 from "./../assets/2.png"
import Pic3 from "./../assets/3.jpg"
import Pic4 from "./../assets/4.png"
import Pic5 from "./../assets/5.png"
import Pic6 from "./../assets/6.png"

export const restaurantData: RestaurantType[] = [
    {
        id: 1,
        image: Pic1,
        title: "Пицца плюс",
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 2,
        image: Pic2,
        title: "Тануки ",
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 3,
        image: Pic3,
        title: "FoodBand",
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 4,
        image: Pic4,
        title: "Жадина-пицца",
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 5,
        image: Pic5,
        title: "Точка еды",
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
    {
        id: 6,
        image: Pic6,
        title: "PizzaBurger",
        time: 50,
        rating: 4.5,
        price: 900,
        category: "Пицца"
    },
] as const;

export interface RestaurantType {
    id: number;
    image: string;
    title: string;
    time: number;
    rating: number;
    price: number;
    category: string;
}