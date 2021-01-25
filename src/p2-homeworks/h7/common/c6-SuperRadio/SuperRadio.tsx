import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import {FormControlLabel, FormControlLabelProps, Radio} from "@material-ui/core";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: React.ChangeEvent<any>) => {
        if(onChangeOption){
            onChangeOption(e.currentTarget.value)
        }
    }

    //ChangeEvent<HTMLInputElement>
    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            {/*<input
                type={"radio"}
                value={o}
                onChange={onChangeCallback}
                name={'name - ' + i}
                checked={value === o}
                // name, checked, value, onChange
            />
            {o}*/}

            <FormControlLabel value={o}
                              control={<Radio />}
                              label={o}
                              onChange={onChangeCallback}
                              name={'name - ' + i}
                              checked={value === o}/>

        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
