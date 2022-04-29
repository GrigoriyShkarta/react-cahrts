import {useState} from "react";

import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend,
        PointElement, LineElement,} from 'chart.js';
import {Bar, Line, Pie} from 'react-chartjs-2';

import ChartsPopup from "../ChartsPopup/ChartsPopup";
import InputsCharts from "../InputsCharts/InputsCharts";

import './Chart.scss'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title,
    Tooltip, Legend);


const Chart = () => {
    const [labels, setLabels] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [chart, setChart] = useState(0)

    const items = ['bar', 'line', 'pie']

    const updateDataX = (value) => {
        setLabels(value)
    }

    const updateDataY = (value) => {
        setNumbers(value)
    }

    const toggleChart = (index) => {
        setChart(index)
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
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
            <InputsCharts updateDataX={updateDataX} updateDataY={updateDataY}/>
            <ChartsPopup items={items} toggleChart={toggleChart}/>
            {chart === 0 ? <Bar options={options} data={data}/> : null}
            {chart === 1 ? <Line options={options} data={data}/> : null}
            {chart === 2 ? <Pie options={options} data={data}/> : null}
        </div>
    );
};

export default Chart;