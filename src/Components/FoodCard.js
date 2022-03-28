import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';


function FoodCard({foodItem}) {

    const [foodItemImage, setFoodItemImage] = useState("")

    useEffect(()=>{
        fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=52ce18e1&app_key=94901fd21fbdbc510e92bd7736f43784&ingr=${foodItem.item_name.trim()}&nutrition-type=cooking`)
        .then(res=> res.json())
        .then(itemAPIData => setFoodItemImage(itemAPIData.hints[0].food.image))
    },[foodItem.item_name])

    return(

        
            <Col>
                <Card>
                    <Card.Body>

                        <Card.Title><h2>{foodItem.item_name}</h2></Card.Title>
                        <Card.Img  className="card-image" src={foodItemImage} alt={foodItem.item_name}/>
                        <Card.Text>
                            <h4>Type: {foodItem.type}</h4>
                            <p>Quantity: {foodItem.quantity}</p>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default FoodCard;