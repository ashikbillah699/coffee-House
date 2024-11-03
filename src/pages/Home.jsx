import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import HeadingCommon from "../components/HeadingCommon";


const Home = () => {
    const categories = useLoaderData();
    // console.log(categories)
    return (
        <div>
            <Banner></Banner>
            <HeadingCommon title={'Browse Coffees by Category'} subTitle={'Choose your favorite coffee'}></HeadingCommon>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;