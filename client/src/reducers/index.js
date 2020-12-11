import { API_CALL_START, API_CALL_SUCCESS, API_CALL_FAIL, ADD_SMURF, ADD_SMURF_FAIL, API_POST_FAIL } from "./../actions/index";


const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
    formErrors: "",
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case (API_CALL_START):
            return({
                ...state,
                isLoading: true,
            }) 
        case (API_CALL_SUCCESS):
            return({
                ...state,
                smurfs: [action.payload[0], action.payload[1], action.payload[2]],
                isLoading: false,
            }) 
        case (API_CALL_FAIL):
            return({
                ...state,
                isLoading: false,
                error: action.payload,
            })
        case ADD_SMURF:
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload],
                formErrors: "",
            })
        case (ADD_SMURF_FAIL):
            return({
                ...state,
                formErrors: action.payload,
            })
        case (API_POST_FAIL):
            return({
                ...state,
                isLoading: false,
                error: action.payload,
            })
        default:
            return state;
    }
        
}

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary