import React, { useEffect, useState } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from '../components/Scroll';
import './App.css'



function App() {

    const [ robots, setRobots ] = useState([]);
    const [ searchfield, setSearchfield ] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users),[]);

    }) 

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
            
    }

    const filteredRobots = () => robots.filter(robot => {
        return robot.name.toLowerCase()
            .includes(searchfield.toLowerCase());
    })

        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Robo Amigos</h1>    
                <Searchbox searchChange={onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filteredRobots()}/>
                </Scroll>
            </div>
        );
       
    
    
}



export default App; 