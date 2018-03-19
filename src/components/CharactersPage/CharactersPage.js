import React, { Component } from 'react';
import axios from 'axios';
import './charactersPage.css';

import Header from '../Header';

class CharactersPage extends Component {
    constructor() {
        super();

        this.state = {
            characters: []
        }
    }

    getHeroes() {
        axios.get( `/api/get_${this.props.match.params.faction}` )
            .then( response => {
                console.log( response )
                this.setState({
                    characters: response.data
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
        console.log( this.props.match.params.faction )

        let heroes = this.state.characters.map( hero => <div onClick={() => this.deleteHero(hero.id)} key={hero.id}>{hero.name}</div> )

        return (
            <div>
                <Header />

                <div className={`characters-body ${this.props.match.params.faction}`}>
                    {this.props.match.params.faction.toUpperCase()}
                    {heroes}
                    <button onClick={() => this.getHeroes()} >GET</button>
                </div>
                
            </div>
        )
    }
}

export default CharactersPage;