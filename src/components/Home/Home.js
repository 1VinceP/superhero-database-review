import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import marvel from '../../marvel.png';
import dc from '../../dc.png';

import Header from '../../components/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
        
                <div className='app-body'>
                    <Link to='/characters/marvel'>
                        <img src={marvel} alt='Marvel' />
                    </Link>
                    <Link to='/characters/dc'>
                        <img src={dc} alt='DC' />
                    </Link>
                </div>
            </div>
        )
    }
}   

export default Home;