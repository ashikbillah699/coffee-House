import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorite } from "../utility";


const CoffeeDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [coffe, setCoffe] = useState({})
    const [isFavorite, setFavorite]= useState(false);

    useEffect(() =>{
        const singleData = data.find(coffe => coffe.id == id);
        setCoffe(singleData);
        const favorite = getAllFavorite();
        const isExist = favorite.find(item => item.id == singleData.id)
    if(isExist){
        setFavorite(true)
    }
    },[data, id])
    const {description,image,name,popularity,rating,making_process} = coffe



    const handleFavorite = coffee => {
        addFavorite(coffee);
        setFavorite(true)
    }


    return (
        <div>
            <h1 className="text-3xl mr-48">{description}</h1>
            <img className="w-full mt-6 rounded-lg h-[300px] md:h-[600px]" src={image} alt="" />
            <div className="flex justify-between items-center mt-6">
                <div>
                    <h2 className="text-2xl font-normal">{name}</h2>
                    <p className="font-semibold">Popularity: {popularity}</p>
                    <p className="font-semibold">Rating: {rating}</p>
                </div>
                <button disabled={isFavorite} onClick={()=>{handleFavorite(coffe)}} className="btn btn-warning">Add Favorite</button>
            </div>
            <h1 className="text-3xl mt-10"> Making Process:</h1>
            <p className="font-semibold"> {making_process}</p>
            <h1 className="text-3xl mt-10">Ingredints:</h1>
            {/* <ul>
                {ingredients.map((ingredient, idx) => <li className="list-disc ml-10 mt-2" key={idx}>{ingredient}</li>)}
            </ul>

            <h1 className="text-3xl mt-10">Nutrition:</h1>
            <ul>
                {Object.keys(nutrition_info).map(([key, value], idx) => <li className="list-disc ml-10 mt-2" key={idx}>{key}: {value}</li>)}
            </ul> */}
            
        </div>
    );
};

export default CoffeeDetails;

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
// "S