import {useEffect, useRef, useState} from "react";

import './InputsCharts.scss'

const InputsCharts = ({updateDataX, updateDataY, blurDataX, blurDataY}) => {

    // useEffect(() => {
    //     document.body.addEventListener('click', updateData)
    // }, [])
    //
    // const inputRef = useRef();

    const updateData = (event) => {
        event.currentTarget.value.split(',')
    }

    const onSelectX = (event) => {
        if (event.key === "Enter") {
            updateDataX(event.currentTarget.value.split(','))
        }

    }

    const onSelectY = (event) => {
        if (event.key === "Enter") {
            updateDataY(event.currentTarget.value.split(','));
        }
    }

    const updChartY = (event) => {
        blurDataX(event.currentTarget.value.split(','))
    }

    const updChartX = (event) => {
        blurDataY(event.target.value.split(','))
    }

    return (
        <div className="inputs" >
            <input onKeyDown={onSelectX} onBlur={updChartY} placeholder="X axis labels"/>
            <input onKeyDown={onSelectY} onBlur={updChartX} placeholder="Y axis labels"/>
        </div>
    );
};


export default InputsCharts;