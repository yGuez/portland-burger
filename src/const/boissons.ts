import { Product } from "../models/product";

export const boissons: Array<Product> = [
    {
        type: 9,
        title:'karma cola',
        description: 'cola équitable',
        price: 3,
        image: require("../assets/drink.png")
    }, {
        type: 10,
        title:'gingerella',
        description: 'ginger beer',
        price: 3,
        image: require("../assets/drink.png")
    }, {
        type: 11,
        title:'wat water',
        description: 'menthe concombre',
        price: 3,
        image: require("../assets/drink.png")
    },{
        type: 12,
        title:'jus de pommes',
        description: 'Bio les coteaux nantais',
        price: 3,
        image: require("../assets/drink.png")
    }
]