import Banner from "../components/Banner";
import HeadingCommon from "../components/HeadingCommon";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HeadingCommon title={'Browse Coffees by Category'} subTitle={'Choose your favorite coffee'}></HeadingCommon>

        </div>
    );
};

export default Home;