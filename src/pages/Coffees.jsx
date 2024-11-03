import { useLoaderData } from "react-router-dom";
// import Coffe from "../components/Coffe";
import CoffeeCard from "../components/CoffeeCard";


const Coffees = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-end gap-6 pt-7">
        {
            data.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
        }
    </div>
    );
};

export default Coffees;