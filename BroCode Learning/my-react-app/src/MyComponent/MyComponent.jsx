
import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Spongebob");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [message, setMessage] = useState("Hello");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const updateName = () => {
        const nameFiledValue = document.querySelector('[data-name]').value;
        setName(nameFiledValue); 
    } 
                            
    const incrementAge = () => setAge(age + 1);

    const toggeleEmployeeStatus = () => setIsEmployed(!isEmployed);

    const updateMessage = (e) => setMessage(e.target.value);

    const handleQuantity = (e) => setQuantity(e.target.value);

    const handleCommentChange = (e) => setComment(e.target.value);

    const handlePaymentChange = (e) => setPayment(e.target.value);

    const handleShippingChange = (e) => setShipping(e.target.value);

    return (<>
        <div>
            <label>
                Pickup
                <input value="Pickup" checked={shipping === 'Pickup'} type="radio" onChange={handleShippingChange}/>
            </label>

            <label>
                Delivery
                <input value="Delivery" checked={shipping === 'Delivery'}  type="radio" onChange={handleShippingChange}/>
            </label>

            <label>
                Drop Off
                <input value="Drop Off" checked={shipping === 'Drop Off'}  type="radio" onChange={handleShippingChange}/>
            </label>

            <p> Shipping Method: {shipping}</p>

            <select onChange={handlePaymentChange}>
                <option>Select an option</option>
                <option value="Visa/Master/Maestrio/Amex Cards">Card</option>
                <option value="UPI">UPI</option>
                <option value="Bank transfer Monzo/Barclays/Lloyds">Bank transfer</option>
                <option value="EMI"> EMI</option>
            </select>
            <p> Selected Payment: {payment}</p>
            
            <textarea onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p> Comment: {comment}</p>

            <input type="number" value={quantity} onChange={handleQuantity}/>
            <p> Quantity: {quantity}</p>

            
            <input type="text" value={message} onChange={updateMessage}/>
            <p> Message: {message}</p>

            <p> Name: {name}</p>
            <input type="text" name="name" data-name/>
            <button onClick={updateName}>Update Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed && 'Yes' || 'No'}</p>
            <button onClick={toggeleEmployeeStatus}>Toggle Status</button>
            
        </div>
    </>);
}

export default MyComponent;