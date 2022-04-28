import {useEffect, useRef, useState} from "react";

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
            console.log('hi')
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
        <div ref={inputRef}>
            <label>X axis labels</label><input onKeyDown={onSelectX} onBlur={onSelectX}/>
            <label>Y axis labels</label><input onKeyPress={onSelectY} onBlur={onSelectY}/>
        </div>
    );
};

export default InputsCharts;