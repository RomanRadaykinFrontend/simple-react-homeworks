import { MenuItem } from "@material-ui/core";
import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC, initStateT } from "./bll/themeReducer";
import s from "./HW12.module.css";



function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.actualColor)
    console.log(theme)
    // useDispatch, onChangeCallback
    const themes = ['dark', 'red', 'lightgreen', 'yellow'];
    let dispatch = useDispatch();
    const onChangeColor = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes} onChangeOption={onChangeColor}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
