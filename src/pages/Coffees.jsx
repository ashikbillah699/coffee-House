import { useLoaderData } from "react-router-dom";
// import Coffe from "../components/Coffe";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";


const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data);

    const handleSorted = sortBy =>{
        if(sortBy ==  'popularity'){
            const sorted = [...data].sort((a,b) => b.popularity - a.popularity)
            setCoffees(sorted)
        }
        else if(sortBy == 'rating'){
            const sorted = [...data].sort((a,b) => b.rating - a.rating)
            setCoffees(sorted)
        }
    }
    return (
        <>
            <div className="flex justify-between mt-9">
                <h1 className="text-3xl font-sans">Sort Coffee&lsquo;s by Popularaty & Rating -&gt;</h1>
                <div className="space-x-4">
                    <button onClick={()=> handleSorted('popularity')} className="btn btn-warning">Sort by popularaty</button>
                    <button onClick={()=> handleSorted('rating')} className="btn btn-warning">Sort by Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-end gap-6 pt-7">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </>
    );
};

export default Coffees;