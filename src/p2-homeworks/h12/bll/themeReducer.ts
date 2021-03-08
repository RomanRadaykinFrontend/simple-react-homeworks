export type initStateT = {
        actualColor: string
};

const initState: initStateT = {
        actualColor: 'lightgreen'
};

export const themeReducer = (state: initStateT = initState, action: changeThemeCType): initStateT => { // fix any
    switch (action.type) {
        case "CHANGE_COLOR": {
            return {...state, actualColor: action.actualColor};
        }
        default: return state;
    }
};

type changeThemeCType = {
    type: "CHANGE_COLOR"
    actualColor: string
}

export const changeThemeC = (actualColor: string): changeThemeCType => {
    return {
        type: "CHANGE_COLOR",
        actualColor: actualColor
    }
}; // fix any