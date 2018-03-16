import React, { Component } from 'react';
import axios from 'axios';

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

    render() {
        return (
            <div>
                Marvel
                <button onClick={() => this.getHeroes()} >GET</button>
            </div>
        )
    }
}

export default Marvel;