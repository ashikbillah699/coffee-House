/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {
    console.log(categories);
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map(category =>

                    <NavLink
                        to={`/category/${category.category}`}
                        key={category.id}
                        role="tab"
                        // className="tab"
                        className={( {isActive}) => `tab ${isActive ? 'tab-active': ''}`
                            
                          }
                        >
                        {category.category}
                    </NavLink>

                )
            }
        </div>
    );
};

export default Categories;