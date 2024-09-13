let a = true;
let b = true;

console.log (a && b);

a = false;
b = true;

console.log (a && b);

a = true;
b = false;

console.log (a && b);


function getName(name) {
    return name;
}

console.log (a && getName('Sangam'));

a = false;

console.log (a && getName('Sangam'));
console.log (a || getName('Sangam'));
console.log (a || b);

// Template Lterals

let name1 = "John";
let name2 = "Doe";

console.log(`${name1} ${name2}`);

// Ternary Operator
let showRecipe = true;

function getRecipe(name) {
    return name;
}

let recipe = showRecipe ? getRecipe('Pizza') : getRecipe('Bread');

console.log(recipe);

// Short way of Creating JSON object
const id = 1;
const productName = "Apple Watch";
const rating = 5;

const product = {
    id,
    productName,
    rating
}

console.log(product);

const product2 = {
    id,
    productName,
    rating,
    description: 'Product 2 Desc'
}

console.log(product2);

// Object destructing
const {description} = product2;
console.log(description);

// Array destructing
const array = [1,2,3];
const [firstEle, secondEle, thirdEle] = array;

console.log(`${firstEle}, ${secondEle}, ${thirdEle}`);

// Default Parameter
function multiplyTwoNumbers (num1=0, num2=0) {
    return num1 * num2;
}

console.log(multiplyTwoNumbers(2, 3));
console.log(multiplyTwoNumbers());

// Spread Operater 

const array1 = [100,200,300,400];
console.log(...array1);

const array2 = [10, 20, 30, 30];
console.log(...array2);

console.log(...array2, ...array1);

console.log([...array2, 50, 90, ...array1, 500, 600]);

function getInfo(a, b, ...c) {
    console.log(a, b, c);
    return 'Sangam';
}

console.log(getInfo(67,2,3,4,5,6,7,89,0,34));

// map, filter, find, some, includes, indexof, findIndex

const personArray = [
    {
        name: 'Person 1',
        age: 30,
        country: 'USA'
    },
    {
        name: 'Person 2',
        age: 40,
        country: 'Russia'
    },
    {
        name: 'Person 3',
        age: 45,
        country: 'USA'
    },
    {
        name: 'Person 4',
        age: 50,
        country: 'India'
    }
];

let personNames = personArray.map((singlePerson, index) => {
    return `${singlePerson.name} age is ${singlePerson.age}`;
});

console.log(personNames);

let americans = personArray.filter(person => {
    return person.country == 'USA';
});

console.log(americans);

let american = personArray.find(person => {
    return person.country == 'USA';
});

console.log(american);

let checkSomePersonsAge = personArray.some(person => {
    return person.age >= 50;
});

console.log(checkSomePersonsAge);

let checkAllthePersonsAge = personArray.every(person => {
    return person.age > 25;
});

console.log(checkAllthePersonsAge);


const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana'));
console.log(fruits.includes('grape'));

console.log(fruits.indexOf('grape'));
console.log(fruits.indexOf('orange'));

let indianIndex = personArray.findIndex(person => {
    return person.country === 'India';
});

console.log(indianIndex);

async function fetchProducts() {
    let proListEle = document.querySelector('.list-of-products');
    console.log(proListEle);
    try {
        const apiResponse = await fetch('https://dummyjson.com/products', {method: "GET"});

        const result = await apiResponse.json();

        console.log(result);

        if (result.products.length > 0) {
            proListEle.innerHTML = result.products.map(product => {
                return `<p> ${product.title}</p>`;
            }).join('<hr/>');
        }
    } catch (e) {
        console.log(e);
    }
}

fetchProducts();