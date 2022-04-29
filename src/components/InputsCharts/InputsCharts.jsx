import {useEffect, useRef, useState} from "react";

import './InputsCharts.scss'

const InputsCharts = ({updateDataX, updateDataY}) => {
    const [labels, setLabels] = useState([]);
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        document.body.addEventListener('click', updateData)
    }, [])

    const inputRef = useRef();

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
        } else {

        }
    }

    const updChartY = (event) => {
        setNumbers(event.currentTarget.value.split(','))
    }

    const updChartX = (event) => {
        setLabels(event.target.value.split(','))
    }

    return (
        <div className="inputs" ref={inputRef}>
            <input onKeyDown={onSelectX} onBlur={onSelectX} placeholder="X axis labels"/>
            <input onKeyPress={onSelectY} onBlur={onSelectY} placeholder="Y axis labels"/>
        </div>
    );
};

export default InputsCharts;