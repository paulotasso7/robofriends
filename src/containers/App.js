import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from '../components/Scroll';
import './App.css'



class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemons: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch(' https://pokeapi.co/api/v2/{endpoint}/')
            .then(response => response.json())
            .then(users => {this.setState({ pokemons: users})});

    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
            
    }

    render() {
        const { pokemons, searchfield } = this.state;
        const filteredPokemons = pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase()
                .includes(searchfield.toLowerCase());
        })
            return !pokemons.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Your favotire Pokedex</h1>    
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist pokemons={filteredPokemons}/>
                    </Scroll>
                </div>
            );
       
        } 
    }



export default App; 