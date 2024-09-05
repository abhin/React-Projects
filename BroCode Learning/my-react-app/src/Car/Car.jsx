import { useState } from "react";

function Car() {
    // const [car, setCar] = useState({
    //                         year: 2024,
    //                         make: "Ford",
    //                         model: "Mustang"});

    // const handleYearChange = (e) => setCar(car => ({...car, year: e.target.value}));

    // const handleMakeChange = (e) => setCar(c => ({...c, make: e.target.value}));

    // const handleModelChange = (e) => setCar(c => ({...c, model: e.target.value}));

    // return (
    //     <>
    //         <div>
    //             <p>
    //                 Your Favorite Car is: {car.year}, {car.make}, {car.model}
    //             </p>

    //             <input type="number" name="year" min={2024} onChange={handleYearChange}/>
    //             <input type="text" name="make" value={car.make} onChange={handleMakeChange}/>
    //             <input type="text" name="model" value={car.model} onChange={handleModelChange}/>

    //         </div>
    //     </>
    // );

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarmodel] = useState("");

    const handleAddCar = () => {
        const newCar = {year:carYear, 
                        make: carMake, 
                        model: carModel};

        // setCars(c => c.filter(car => (car.year !== carYear && car.make !== carMake && car.model !== carModel)));
        // console.log(typeof cars)
        setCars(cs => ([...cs, newCar]));

        // console.log(cars)


        setCarYear(2024);
        setCarMake("");
        setCarmodel("");
    }

    const handleRemoveCar = (index) => {
        cars.splice(index, 1);
        setCars(c => [...c]);
    }

    const handleYearChange = (e) => setCarYear(() => e.target.value);
    const handleMakeChange = (e) => setCarMake(() => e.target.value);
    const handleModelChange = (e) => setCarmodel(() => e.target.value);

    return (
        <>
            <div>
                <p>
                    List of Car Objects
                </p>
                <ul>
                    {cars.map((car, i )=> 
                        <li key={i} onClick={(e)=> handleRemoveCar(i)}>
                            {car.year}, {car.make}, {car.model}
                        </li>
                    )}
                </ul>

                <input type="number" value={carYear} onChange={handleYearChange} />
                <input type="text" value={carMake}  onChange={handleMakeChange} placeholder="Enter Car Make" />
                <input type="text" value={carModel} onChange={handleModelChange}  placeholder="Enter Car Model" />
                <button onClick={handleAddCar}>Add car</button>

            </div>
        </>
    );
}

export default Car;