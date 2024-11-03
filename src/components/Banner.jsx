import bannerImage from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero  min-h-screen" 
        style={{ backgroundImage: `url(${bannerImage})` }}>
            {/* <img src={bannerImage} alt="" /> */}
      </div>
    );
};

export default Banner;