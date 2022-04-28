import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend, PointElement, LineElement,
} from 'chart.js';
import {Bar, Pie} from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

import {useRef, useState} from "react";

import './Chart.scss'
import ChartsPopup from "./ChartsPopup/ChartsPopup";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);


const Chart = () => {
    const [labels, setLabels] = useState([]);
    const [numbers, setNumbers] = useState([]);

    const items = ['bar', 'line', 'doughnut']

    // useEffect(() => {
    //     document.body.addEventListener('click', () => console.log('click'))
    // }, [])

    const onSelectX = (event) => {
        if (event.key === "Enter") {
            setLabels(event.target.value.split(','))
        }
    }

    const onSelectY = (event) => {
        if (event.key === "Enter") {
            updChartY(event);
        }
    }

    const updChartY = (event) => {
        setNumbers(event.currentTarget.value.split(','))
    }

    const updChartX = (event) => {
        setLabels(event.target.value.split(','))
    }

    // const handleCrafic = () => {
    //     setChart(!chart)
    // }



    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            // title: {
            //     display: true,
            //     text: chart ? 'bar' : 'line',
            // },
        },
    };

    const data = {
        labels,
        numbers,
        datasets: [
            {
                label: 'Dataset 1',
                data:labels.map((label, index) => numbers[index]),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container">
            <label>X axis labels</label><input onKeyPress={onSelectX} onBlur={updChartX}/>
            <label>Y axis labels</label><input onKeyPress={onSelectY} onBlur={updChartY}/>
            {/*<input checked={chart} type="radio" name="fav_language" onChange={handleCrafic}/>*/}
            {/*<label htmlFor="html">Bar Chart</label>*/}
            {/*<input type="radio" name="fav_language" onChange={handleCrafic}/>*/}
            {/*<label htmlFor="css">Line Chart</label>*/}

            {/*{chart ? <Bar options={options} data={data}/> : <Line options={options} data={data}/>}*/}
            {/*<ChartsPopup items={items}/>*/}
            <Pie data={data}/>
        </div>
    );
};

export default Chart;