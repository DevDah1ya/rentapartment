import {createStore} from 'redux';

const initalState ={
    city: 'New York'
}

function reducer(state = initalState, action){
    switch (action.type) {

        case "SET_City": 
            return  {
                ...state,
                city: action.payload,
              };
        default:
            return state;
    }
}

 const store = createStore(reducer);

 export default store;