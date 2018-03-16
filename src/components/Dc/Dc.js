import React, { Component } from 'react';
import axios from 'axios';

class Dc extends Component {
    constructor() {
        super();

        this.state = {
            superheroes: []
        }
    }

    getHeroes() {
        axios.get( '/api/get_dc' )
            .then( response => {
                console.log( response.data )
                this.setState({
                    superheroes: response.data
                })
            } )
    }

    render() {

        let heroes = this.state.superheroes.map( hero => <div key={hero.id}>{hero.name}</div> )

        return (
            <div>
                DC
                {heroes}
                <button onClick={() => this.getHeroes()} >GET</button>
            </div>
        )
    }
}

export default Dc;