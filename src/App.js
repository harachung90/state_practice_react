import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    const thingsArray = ["Thing 1", "Thing 2"]

    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])

        // let num = thingsArray.length + 1;
        // thingsArray.push("Thing " + num);
        //console.log(thingsArray);
    }

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div className="container">
            <button onClick={addItem}>Add Item</button>
            <p>{thingsElements}</p>
        </div>
    );
}

export default App;
