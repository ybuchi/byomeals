import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./AddItemForm.css"

function AddItemForm({newItemForm, newItemFormState, addNewItem}) {

    function handleOnChange(e){
        newItemFormState({...newItemForm, [e.target.name]:e.target.value})
    }

    function handleNewItemSubmit(e){
        e.preventDefault();
        addNewItem(newItemForm)
    }
    return (
        <div className="form-container font-ptsans-bold">
            <h2 className="font-caveat label">Add Items to Your Fridge</h2>
            <Form onSubmit={handleNewItemSubmit}>
                <Row>
                    <Col>
                        {/* Item Name */}
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="item-name">Item Name: </Form.Label>
                            <Form.Control className="control-box" onChange={handleOnChange} type="text" name="item_name" id="item_name" value={newItemForm.item_name}></Form.Control> <br/>
                        </Form.Group>
                    </Col>
                    <Col>
                        {/* Item Quantity */}
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="item-quantity">Quantity: </Form.Label>
                            <Form.Control className="control-box" onChange={handleOnChange} type="number" name="quantity" id="item-quantity" value={newItemForm.quantity}></Form.Control> <br/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            {/* Item Type */}
                            <Form.Label htmlFor="type">Choose Item Type: </Form.Label>
                            <select onChange={handleOnChange} name="type" value={newItemForm.type}>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Meat">Meat</option>
                                <option value="Poultry">Poultry</option>
                            </select> <br />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="font-ptsans-bold" type="submit" value="Add Item" style={{backgroundColor : "#56BBF1"}}>Add Item</Button>
                    </Col>
                </Row>
            </Form>
        </div>

    )
}

export default AddItemForm;