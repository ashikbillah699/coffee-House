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
    const favorite = getAllFavorite()
    const isExist = favorite.find(item => item.id == coffee.id)
    if(isExist){
        return toast.error('Allready Exist');
    }
    favorite.push(coffee)
    localStorage.setItem('favorite', JSON.stringify(favorite))
    toast.success('successfully add')
}

const removeFavorite = (id) =>{
    const favorite = getAllFavorite()
    const remaining = favorite.filter(coffee => coffee.id != id)
    localStorage.setItem('favorite', JSON.stringify(remaining))
    toast.success('successfully removed')
}


export {addFavorite,getAllFavorite,removeFavorite};

