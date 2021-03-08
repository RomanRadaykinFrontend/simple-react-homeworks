import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import cl from '../../HW7.module.css'
import MenuItem from "@material-ui/core/MenuItem";
import {Select} from "@material-ui/core";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((item, index) => {
        return <MenuItem value={item} key={'name' + "-" + index}>
            {item}
        </MenuItem>
    }) : [] // map options with key

    const onChangeCallback = (e: React.ChangeEvent<any>) => {
        if (onChangeOption) {
            console.log(e)
            onChangeOption(e.target.value)
        }
    }

    return (
        <Select className={cl.styleSelect} onChange={onChangeCallback}>
            {mappedOptions}
        </Select>


    );
}

export default SuperSelect;
