import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC, StateType } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import preloader from './../common/img/preloader.svg'

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.status)

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(!loading))
        // setTimeout
        console.log("loading...");
    };

    useEffect(() => {
        setTimeout(() => {
            //console.log(loading.status)
            dispatch(loadingAC(!loading))
        }, 2000)
    }, [loading]);

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={preloader} alt="крутилка"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
