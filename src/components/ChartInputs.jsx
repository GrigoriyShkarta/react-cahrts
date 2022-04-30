import '../scss/components/_inputsCharts.scss';

const getValues = (event) => {
    return event.currentTarget.value.split(',');
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
            <span>Ось Х</span>
            <input onKeyDown={onEnterX} onBlur={onBlurX} placeholder="Введите данные через запятую"/>
            <span>Ось У</span>
            <input onKeyDown={onEnterY} onBlur={onBlurY} placeholder="Введите данные через запятую"/>
        </div>
    );
};


export default ChartInputs;