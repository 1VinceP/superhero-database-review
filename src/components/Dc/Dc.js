import React, { Component } from 'react';
import axios from 'axios';
import './dc.css';

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

    deleteHero( id ) {
        axios.delete( `/api/delete_hero/${id}` )
            .then( () => {
                this.getHeroes()
            })
    }

    render() {

        let heroes = this.state.superheroes.map( hero => <div onClick={() => this.deleteHero(hero.id)} key={hero.id}>{hero.name}</div> )

        return (
            <div className='dc-body'>
                DC
                {heroes}
                <button onClick={() => this.getHeroes()} >GET</button>
            </div>
        )
    }
}

export default Dc;