import React from 'react';
import { connect } from 'react-redux';

function DisplayMarvelCount(props) {
    return (
        <div style={{ fontSize: '36px' }}>
            {props.count}
        </div>
    )
}

function mapStateToProps( state ) {
    return {
        count: state.marvel.count
    }
}

export default connect( mapStateToProps )(DisplayMarvelCount);