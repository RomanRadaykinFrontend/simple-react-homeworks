import React, {useEffect} from "react";
import {useState} from "react";
import {testApi} from "./api";

function HW13() {

    let [value, setValue] = useState<boolean>(false);
    let [message, setMessage] = useState<string>('')


    async function postS() {
        try {
            let result = testApi.postSuccess({success: true});
            result.then(res => {
                setMessage(res.data.errorText + ' : ' + res.data.info)
            })
            setValue(true)
        } catch (error) {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
        }
    }

    return (
        <div>
            <span>
                homeworks 13
            </span>
            <input type="checkbox" checked={value}/>
            <button onClick={postS}>click</button>
            <span>
                {message && message}
            </span>
        </div>
    )
}

export default HW13