import { AppStoreType } from "./store";

const initState = {
    status: false
};

export type StateType = typeof initState

export const loadingReducer = (state: StateType = initState , action: loadingACType): StateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, status: action.payload.status};
        }
        default: 
            return state;
    }
};

type loadingACType = {
    type: 'LOADING',
    payload: {
        status: boolean
    }
}

export const loadingAC = (status: boolean): loadingACType => ({type: 'LOADING', payload: {status}});