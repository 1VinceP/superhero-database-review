import React, { Component } from 'react';

class DisplayHero extends Component {
    constructor() {
        super();

        this.state = {
            newName: '',
            newPowers: '',
            edit: false
        }
    }

    handleChange( key, e ) {
        this.setState({
            [key]: e.target.value
        })
    }

    handleClick( id ) {
        const { newName, newPowers } = this.state
        this.setState({
            edit: false,
            newName: '',
            newPowers: ''
        })
        this.props.editHero( id, newName, newPowers )
    }

    render() {

        const { hero, deleteHero } = this.props

        return (
            <div>
                { !this.state.edit
                    ? <div>
                        <div onClick={() => deleteHero(hero.id)}>{hero.name}</div> 
                        <button onClick={() => this.setState({edit: true})}>Edit</button>
                      </div>
                    : <div>
                        <input value={this.state.newName} placeholder={hero.name} onChange={e => this.handleChange('newName', e)} />
                        <input value={this.state.newPowers} placeholder={hero.powers} onChange={e => this.handleChange('newPowers', e)} />
                        <button onClick={() => this.handleClick(hero.id)}>Edit</button>                        
                      </div>
                }
                
            </div>
        )
    }
}

export default DisplayHero;