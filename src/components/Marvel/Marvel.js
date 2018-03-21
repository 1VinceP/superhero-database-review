import React, { Component } from 'react';
import axios from 'axios';
import './marvel.css';

class Marvel extends Component {
    constructor() {
        super();

        this.state = {
            superheroes: []
        }
    }

    getHeroes() {
        axios.get( '/api/get_marvel' )
            .then( response => {
                console.log( response )
                this.setState({
                    superheroes: response.data
                })
            } )
    }

    deleteHero( id ) {
        axios.delete( `/api/delete_hero/${id}` )
            .then( () => {
                this.getHeroes()
            })
    }

    render() {

        let heroes = this.state.superheroes.map( hero => <div onClick={() => this.deleteHero(hero.id)} key={hero.id}>{hero.name}</div> )
        

        return (
            <div className='marvel-body' >
                Marvel
                {heroes}
                <button onClick={() => this.getHeroes()} >GET</button>
            </div>
        )
    }
}

export default Marvel;