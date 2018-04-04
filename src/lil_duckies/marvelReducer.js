let initialState = {
    count: 0
}

const ADD_MARVEL_COUNT = 'ADD_MARVEL_COUNT';

export default function reducer( state = initialState, action ) {
    switch( action.type ) {
        case ADD_MARVEL_COUNT:
            return Object.assign( {}, state, { count: action.payload } )

        default:
            return state
    }
}

export function addMarvelCount( num ) {

    return {
        type: ADD_MARVEL_COUNT,
        payload: ++num
    }
}