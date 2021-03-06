let initialState = {
    count: 0
}

const ADD_COUNT = 'ADD_COUNT';

export default function reducer( state = initialState, action ) {
    switch( action.type ) {
        case ADD_COUNT:
            return Object.assign( {}, state, { count: action.payload } )

        default:
            return state
    }
}

export function addCount( num ) {

    return {
        type: ADD_COUNT,
        payload: ++num
    }
}