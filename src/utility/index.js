import toast from "react-hot-toast";

const getAllFavorite = () =>{
    const all = localStorage.getItem('favorite')
    if(all) {
        const favorite = JSON.parse(all);
        console.log(favorite);
        return favorite
    }
    else{
        console.log([]);
        return [];
    }
}

// add copy to local storage
const addFavorite = coffee => {
    console.log(coffee);
    const favorite = getAllFavorite()
    const isExist = favorite.find(item => item.id == coffee.id)
    if(isExist){
        return toast.error('Allready Exist');
    }
    favorite.push(coffee)
    localStorage.setItem('favorite', JSON.stringify(favorite))
    toast.success('successfully add')
}


export {addFavorite,getAllFavorite};

