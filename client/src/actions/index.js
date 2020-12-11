import axios from "axios";

export const API_CALL_START = "API_CALL_START";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAIL = "API_CALL_FAIL";

export const getSmurfData = () => dispatch => {
    dispatch({type: API_CALL_START});

    setTimeout(() => {
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res);
                dispatch({type: API_CALL_SUCCESS, payload: res.data});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: API_CALL_FAIL, payload: err});
            })
    }, 1000)
}

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const API_POST_FAIL = "API_POST_FAIL";



export const addSmurf = (dataObj) => dispatch => {
    if (!dataObj.name || !dataObj.position || !dataObj.nickname) {
        dispatch({type: ADD_SMURF_FAIL, payload: `Please fill out required fields - ${!dataObj.name ? "*name" : ""} ${!dataObj.position ? "*position" : ""} ${!dataObj.nickname ? "*nickname" : ""}`})
    }
    // else dispatch({type: ADD_SMURF, payload: dataObj});
    else {
        axios
            .post("http://localhost:3333/smurfs", dataObj)
            .then(res => {
                console.log(res);
                dispatch({type: ADD_SMURF, payload: dataObj});
            })
            .catch(err => {
                console.log(err)
                dispatch({type: API_POST_FAIL, payload: err})
            })
    }
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.