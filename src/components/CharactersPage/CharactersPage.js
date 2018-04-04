import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './charactersPage.css';

import Header from '../Header';
import DisplayHero from '../DisplayHero';

import { addCount } from '../../lil_duckies/reducer';
import { addMarvelCount } from '../../lil_duckies/marvelReducer';

class CharactersPage extends Component {
    constructor() {
        super();

        this.state = {
            characters: []
        }

        this.getHeroes = this.getHeroes.bind(this)
        this.deleteHero = this.deleteHero.bind(this)
        this.editHero = this.editHero.bind(this)

    }

    getHeroes() {
        axios.get( `/api/get_${this.props.match.params.faction}` )
            .then( response => {
                console.log( response )
                this.setState({
                    characters: response.data
                })
            } )

        const { faction } = this.props.match.params
        
        if( faction === 'marvel')
            this.props.addMarvelCount(this.props.marvelCount)
        else if( faction === 'dc' )
            this.props.addCount(this.props.count)

    }

    deleteHero( id ) {
        axios.delete( `/api/delete_hero/${id}` )
            .then( () => {
                this.getHeroes()
            })
    }

    editHero( id, newName, newPowers ) {
        let body = {
            name: newName,
            powers: newPowers
        }

        axios.put( `/api/edit_hero/${id}`, body )
            .then( () => this.getHeroes() )
    }

    render() {
        const { faction } = this.props.match.params

        console.log( this.props )

        let heroes = this.state.characters.map( hero => {
            return (
                    <DisplayHero
                        key={hero.id}
                        hero={hero}
                        deleteHero={this.deleteHero}
                        editHero={this.editHero}
                    />
            )
        })

        return (
            <div>
                <Header />

                <div className={`characters-body ${faction}`}>
                    {faction.toUpperCase()}
                    {heroes}
                    <button onClick={() => this.getHeroes()} >GET</button>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps( state ) {

    return {
        count: state.dc.count,
        marvelCount: state.marvel.count
    }
}

export default connect( mapStateToProps, { addCount, addMarvelCount } )(CharactersPage);