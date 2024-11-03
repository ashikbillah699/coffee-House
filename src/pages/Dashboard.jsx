import { useEffect, useState } from "react";
import HeadingCommon from "../components/HeadingCommon";
import { getAllFavorite, removeFavorite } from "../utility";
import CoffeeCard from "../components/CoffeeCard";


const Dashboard = () => {

    const handleRemove = id => {
        removeFavorite(id);
        const favorite = getAllFavorite()
        setCoffee(favorite)
    }

    const [coffees, setCoffee] = useState([]);
    useEffect(() => {
        const favorite = getAllFavorite()
        setCoffee(favorite)
    }, [])

    return (
        <div>
            <HeadingCommon
                title={'Wellcome to Dashboard'}
                subTitle={' your Dashboard coffee'}></HeadingCommon>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-end gap-6 pt-7">
                {
                    coffees.map(coffee => <CoffeeCard handleRemove={handleRemove} key={coffee.id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Dashboard;