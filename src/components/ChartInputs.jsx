import '../scss/components/_inputsCharts.scss';

const getValues = (event) => {
    return event.currentTarget.value.split(',')
}

const ChartInputs = ({updateDataX, updateDataY}) => {

    const onEnterX = (event) => {
        if (event.key === "Enter") {
            updateDataX(getValues(event));
        }
    }

    const onEnterY = (event) => {
        if (event.key === "Enter") {
            updateDataY(getValues(event));
        }
    }

    const onBlurY = (event) => {
        updateDataY(getValues(event));
    }

    const onBlurX = (event) => {
        updateDataX(getValues(event));
    }

    return (
        <div className="inputs" >
            <input onKeyDown={onEnterX} onBlur={onBlurX} placeholder="X axis labels"/>
            <input onKeyDown={onEnterY} onBlur={onBlurY} placeholder="Y axis labels"/>
        </div>
    );
};


export default ChartInputs;