import { MenuInterface } from "../types";
import axios from "axios";

const menuData: MenuInterface[] = [
    {
        id: 1,
        name: "Mutton Biryani",
        price: 5.99,
        description: "A delicious and flavorful rice dish made with tender pieces of mutton, aromatic spices, and basmati rice, cooked to perfection.",
        category: "Biryani",
    },
    {
        id: 2,
        name: "Chicken Biryani",
        price: 6.99,
        description: "A delicious and flavorful rice dish made with tender pieces of Chicken, aromatic spices, and basmati rice, cooked to perfection.",
        category: "Biryani",
    },
    {
        id: 3,
        name: "Butter Roti",
        price: 1.99,
        description: "A soft and fluffy Indian bread made with whole wheat flour and butter.",
        category: "Bread",
    },
    {
        id: 4,
        name: "Naan",
        price: 1.99,
        description: "A soft and fluffy Indian bread made with all-purpose flour and baked in a tandoor.",
        category: "Bread",
    },
    {
        id: 5,
        name: "Veg Hot and Sour Soup",
        price: 90,
        description: "A spicy and tangy vegetarian soup.",
        category: "Veg Soup",
        image: ""
    },
    {
        id: 6,
        name: "Veg Manchow Soup",
        price: 95,
        description: "A flavorful soup with crispy fried noodles.",
        category: "Veg Soup",
        image: ""
    },
    {
        id: 7,
        name: "Veg Sweet Corn Soup",
        price: 90,
        description: "A mild and creamy soup with sweet corn.",
        category: "Veg Soup",
        image: ""
    },
    {
        id: 8,
        name: "Tomato Soup",
        price: 100,
        description: "A classic creamy tomato soup.",
        category: "Veg Soup",
        image: ""
    },
    {
        id: 9,
        name: "Lemon Coriander Soup",
        price: 100,
        description: "A refreshing soup with lemon and coriander flavors.",
        category: "Veg Soup",
        image: ""
    },
    {
        id: 10,
        name: "Chicken Hot and Sour Soup",
        price: 100,
        description: "A spicy and tangy chicken soup.",
        category: "Non-Veg Soup",
        image: ""
    },
    {
        id: 11,
        name: "Paneer Chilli",
        price: 150,
        description: "A spicy Indo-Chinese paneer dish.",
        category: "Veg Chinese Starter",
        image: ""
    },
    {
        id: 12,
        name: "Chicken Manchurian",
        price: 170,
        description: "A classic chicken Indo-Chinese dish.",
        category: "Non-Veg Chinese Starter",
        image: ""
    },
    {
        id: 13,
        name: "Veg Dum Biryani",
        price: 100,
        description: "A fragrant and flavorful vegetarian biryani.",
        category: "Biryani",
        image: ""
    },
    {
        id: 14,
        name: "Chicken Dum Biryani",
        price: 200,
        description: "A fragrant and flavorful chicken biryani.",
        category: "Biryani",
        image: ""
    },
    {
        id: 15,
        name: "Paneer Butter Masala",
        price: 110,
        description: "A rich and creamy paneer curry.",
        category: "Veg Main Course",
        image: ""
    },
    {
        id: 16,
        name: "Chicken Tikka Masala",
        price: 220,
        description: "A spicy and creamy chicken curry.",
        category: "Non-Veg Main Course",
        image: ""
    },
    {
        id: 17,
        name: "Tandoori Roti",
        price: 15,
        description: "A traditional Indian bread cooked in a tandoor.",
        category: "Roti",
        image: ""
    },
    {
        id: 18,
        name: "Butter Naan",
        price: 35,
        description: "A soft and buttery Indian bread.",
        category: "Roti",
        image: ""
    },
    {
        id: 19,
        name: "Vanilla Shake",
        price: 80,
        description: "A creamy vanilla milkshake.",
        category: "Shake & Juice",
        image: ""
    },
    {
        id: 20,
        name: "Hot Coffee",
        price: 25,
        description: "A hot brewed coffee.",
        category: "Tea & Coffee",
        image: ""
    }
];

export {
    menuData
}
