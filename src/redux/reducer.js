
const initialState = {
    user: {
        firstName: null,
        lastName: null,
    },
    color: null,
    gender: null,
    hairColor: null,
    eyeColor: null,


}

const FETCH_USER_DATA = 'FETCH_USER_DATA';
const UPDATE_FIRST = 'UPDATE_FIRST';
const UPDATE_LAST = 'UPDATE_LAST';

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_USER_DATA:

            return {...state, user: action.payload}
        case UPDATE_FIRST:

            return {...state, user:{ firstName: action.payload, lastName: state.user.lastName}}
        case UPDATE_LAST:

            return {...state, user:{ lastName: action.payload, firstName: state.user.firstName}}
        
        default: 
            return state;

    }
};

export function fetchUserData(user){
    return {
        type: FETCH_USER_DATA,
        payload: user
    }
}

export function updateFirst(first){
    return {
        type: UPDATE_FIRST,
        payload: first
    }
}

export function updateLast(last){
    return {
        type: UPDATE_LAST,
        payload: last
    }
}