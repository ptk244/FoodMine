import { Food } from "./app/shared/food";
import { Tag } from "./app/shared/models/tag";

export const sample_food: Food[] = [
    {
        id: '1',
        name: 'Margherita Pizza',
        price: 12.99,
        tags: ['Pizza', 'FastFood', 'Italian', 'Vegetarian'],
        favorate: true,
        stars: 4.5,
        imageUrl: 'assets/food1.jpeg',
        origins: ['Italy'],
        cooktime: '30 mins'
    },
    {
        id: '2',
        name: 'Sushi Platter',
        price: 24.99,
        tags: ['Sushi', 'Japanese', 'Seafood'],
        favorate: false,
        stars: 4.8,
        imageUrl: 'assets/food2.jpeg',
        origins: ['Japan'],
        cooktime: '45 mins'
    },
    {
        id: '3',
        name: 'Tacos',
        price: 9.99,
        tags: ['Tacos', 'FastFood', 'Mexican', 'StreetFood'],
        favorate: true,
        stars: 4.7,
        imageUrl: 'assets/food3.jpeg',
        origins: ['Mexico'],
        cooktime: '20 mins'
    },
    {
        id: '4',
        name: 'Butter Chicken',
        price: 14.99,
        tags: ['Chicken', 'Indian', 'Spicy'],
        favorate: false,
        stars: 4.6,
        imageUrl: 'assets/food4.jpeg',
        origins: ['India'],
        cooktime: '50 mins'
    },
    {
        id: '5',
        name: 'Pasta Carbonara',
        price: 11.99,
        tags: ['Pasta', 'Italian', 'Creamy'],
        favorate: true,
        stars: 4.4,
        imageUrl: 'assets/food5.jpeg',
        origins: ['Italy'],
        cooktime: '25 mins'
    },
    {
        id: '6',
        name: 'Greek Salad',
        price: 8.99,
        tags: ['Salad', 'Greek', 'Vegetarian'],
        favorate: false,
        stars: 4.3,
        imageUrl: 'assets/food6.jpeg',
        origins: ['Greece'],
        cooktime: '15 mins'
    }
];



export const sample_tags = [
    { name: "All", count: 1 },
    { name: "Pizza", count: 1 },
    { name: "FastFood", count: 2 },
    { name: "Italian", count: 2 },
    { name: "Vegetarian", count: 2 },
    { name: "Sushi", count: 1 },
    { name: "Japanese", count: 1 },
    { name: "Seafood", count: 1 },
    { name: "Tacos", count: 1 },
    { name: "Mexican", count: 1 },
    { name: "StreetFood", count: 1 },
    { name: "Chicken", count: 1 },
    { name: "Indian", count: 1 },
   
];