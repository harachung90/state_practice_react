import './App.css';
import React from 'react';

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        setThingsArray(prevState => [...prevState, newThingText])

        // let num = thingsArray.length + 1;
        // thingsArray.push("Thing " + num);
        //console.log(thingsArray);
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div className="container">
            <button onClick={addItem}>Add Item</button>
            <p>{thingsElements}</p>
        </div>
    );
}

export default App;
