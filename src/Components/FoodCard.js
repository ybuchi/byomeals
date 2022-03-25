import React, {useState, useEffect} from "react";

function FoodCard({foodItem}) {

    const [foodItemImage, setFoodItemImage] = useState("")

    useEffect(()=>{
        fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=52ce18e1&app_key=94901fd21fbdbc510e92bd7736f43784&ingr=${foodItem.item_name.trim()}&nutrition-type=cooking`)
        .then(res=> res.json())
        .then(itemAPIData => setFoodItemImage(itemAPIData.hints[0].food.image))
    },[])
    return(
        <>
            <h2>{foodItem.item_name}</h2>
            <img src={foodItemImage} alt={foodItem.item_name}/>
            <h4>{foodItem.type}</h4>
            <div>
                <p>{foodItem.quantity}</p>
            </div>
        </>
    )
}

export default FoodCard;