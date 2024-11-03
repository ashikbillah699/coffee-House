/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
    console.log(coffee)
    const { id, image, category, name, origin, rating, type, popularity } = coffee;
    return (
        <Link to={`/coffee/${id}`}>
            <div className="card bg-base-100 border 
            transform transition-transform duration-300 
            hover:-translate-y-2 hover:scale-105">
                <figure>
                    <img
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title ">Name: {name}</h2>
                    <p className="font-medium">Category: {category}</p>
                    <p className="font-medium">Type: {type}</p>
                    <p className="font-medium">Origin: {origin}</p>
                    <p className="font-medium">Rating: {rating}</p>
                    <p className="font-medium">Popularity: {popularity}</p>
                </div>
            </div>
        </Link>
    );
};

export default CoffeeCard;

// category
// :
// "Brewed Coffee"
// description
// :
// "A delicious blend of espresso, steamed milk, and rich chocolate, topped with whipped cream."
// id
// :
// 5
// image
// :
// "https://i.ibb.co.com/7pCMWZZ/the-perfect-mocha-coffee-29100-16x9.jpg"
// ingredients
// :
// (4) ['Espresso', 'Steamed Milk', 'Chocolate Syrup', 'Whipped Cream']
// making_process
// :
// "Brew a shot of espresso. In a cup, combine espresso with chocolate syrup. Steam milk and pour it over the espresso mixture. Top with whipped cream and drizzle with additional chocolate syrup."
// name
// :
// "Mocha"
// nutrition_info
// :
// {calories: 250, fat: 10, carbohydrates: 32, protein: 8}
// origin
// :
// "Italy"
// popularity
// :
// 90
// rating
// :
// 4.6
// type
// :
// "Sweet"