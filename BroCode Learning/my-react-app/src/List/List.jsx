import styles from "./List.module.css";
import PropTypes from 'prop-types';

let List = {
    fruits:  [
        {id: 1, name: "apple", calories: 95}, 
        {id: 2, name: "orange", calories: 45}, 
        {id: 3, name: "banana", calories: 105}, 
        {id: 4, name: "coconut", calories: 159}, 
        {id: 5, name: "pineapple", calories: 37}
    ],
    vegetables: [
        {id: 6, name: "carrot", calories: 38}, 
        {id: 7, name: "broccoli", calories: 16}, 
        {id: 8, name: "chillies", calories: 23}, 
        {id: 9, name: "tomato", calories: 10}, 
        {id: 10, name: "onion", calories: 9}
    ],
    paultry: [
        {id: 11, name: "chicken", calories: 38}, 
        {id: 12, name: "mutton", calories: 16}, 
        {id: 13, name: "fish", calories: 23}, 
        {id: 14, name: "beef", calories: 10}, 
        {id: 15, name: "pork", calories: 9}
    ],
    ShowList: function (props) {
        const category = List[props.category] && props.category || "Food";
        const foodItems =  props.items || props.category && List[props.category] || [...new Set([...List.fruits, ...List.vegetables, ...List.paultry])];
        
        foodItems.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL SORT
        // foodItems.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL SORT
        // foodItems.sort((a, b) => a.calories - b.calories); // NUMERIC SORT
        // foodItems.sort((a, b) => b.calories - a.calories); // REVERSE NUMBERS SORT

        // const lowCalfoodItems = foodItems.filter(fruit => fruit.calories < 100 );
        // const highCalfoodItems = foodItems.filter(fruit => fruit.calories >= 100 );

        const foodList = foodItems.map(food => <li key={food.id}>
                                                    {food.name}: {food.calories}
                                                </li>);

        return (
            <>
                <h3 className={styles.listCategory}>{category.toUpperCase()}</h3>
                <ol className={styles.listItems}>
                    {foodList}
                </ol>
            </>
        )
    }
}

List.ShowList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
                                    id: PropTypes.number,
                                    name: PropTypes.string,
                                    calories: PropTypes.number
                                })
                            ),
    category: PropTypes.string,
}

export default List;