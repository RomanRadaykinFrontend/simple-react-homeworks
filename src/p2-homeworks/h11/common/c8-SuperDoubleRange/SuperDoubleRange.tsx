import Slider from "@material-ui/core/Slider";
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useEffect } from "react";
import s from './../c7-SuperRange/SuperRange.module.css';





type SuperDoubleRangePropsType =  {
    value1: number
    value2: number
    setValue1: (value: number) => void
    setValue2: (value: number) => void
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props: SuperDoubleRangePropsType) => {

    const [value, setValue] = React.useState<number[]>([props.value1, props.value2]);


    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        setValue(newValue as number[]);
        props.setValue1(value[0])
        props.setValue2(value[1])
    };

    useEffect(() => {
        setValue([props.value1, props.value2])
    }, [props.value1])




    let doubleStyle = {
        'width': '30%'
    }


    return (
        <>
            <div>
                <Slider onChange={handleChange}
                        value={value}
                        defaultValue={[props.value1, props.value2]}
                        min={0}
                        max={100}
                        step={5}
                        valueLabelDisplay="auto"
                        aria-labelledby="discrete-slider-always"
                        style={doubleStyle}
                />
            </div>
        </>
    );
}

export default SuperDoubleRange;
