import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useEffect, useState } from "react";


const CoffeeCards = () => {
    const navigator = useNavigate()
    const { category } = useParams()
    const data = useLoaderData()
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(coffee => coffee.category === category)
            setCoffees(filteredByCategory)
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-end gap-6 pt-7">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
                }
            </div>
            <div className="text-center pt-9">

            <button onClick={() => navigator('/coffees')} className="btn btn-warning mx-auto">viw all</button>
            </div>
        </div>
    );
};

export default CoffeeCards;