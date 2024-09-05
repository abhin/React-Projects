import { useState } from "react";

function Food() {
    const food1 = "Orange";
    const food2 = "Banana";
    const [foods, setFoods] = useState(["Grape", "Melon", "Avacado"]);

    const handleAddFood = () => {
        const inputFood = document.querySelector('input[id="foodInput"]');
        const newFoodItem = inputFood.value;

        if (!newFoodItem || foods.indexOf(newFoodItem) > 0) {
            return;
        }

        inputFood.value = "";
        setFoods(f => ([...f, newFoodItem]))
    };

    const handleRemoveFood = (index) => {
        // foods.splice(index, 1);
        // setFoods(f => [...f]);
        // Performance and for singlr element
        // vs
        setFoods(foods.filter((food, i) => i !== index));
        // n number of elements
    };

    return (
        <>
            <h2>List of Food</h2>
            <div>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={e => handleRemoveFood(index)}>{food}</li>)}
                </ul>

                <input type="text" name="food" id="foodInput" placeholder="Eneter food name"/>

                <button onClick={handleAddFood}>Add Food</button>
            </div>

            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        </>
    );
}
 export default Food;