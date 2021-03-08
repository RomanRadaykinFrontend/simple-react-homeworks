import React from 'react';
import {Provider} from "react-redux";
import { combineReducers, createStore } from 'redux';
import { AppStoreType } from '../h10/bll/store';
import { loadingReducer } from '../h10/bll/loadingReducer';
import { themeReducer } from './bll/themeReducer';


const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const initialGlobalState = {
    loading: {
        status: false
    },
    theme: {
        actualColor: 'lightgreen'
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppStoreType);

export const HW12Decorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>
}