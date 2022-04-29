import {Bar, Line} from "react-chartjs-2";

import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend,
    PointElement, LineElement,} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title,
    Tooltip, Legend);

const Chart = ({type, data})=> {
    const getChart = function(type){
        switch(type) {
            case 0:
                return <Bar data={data}/>;
            case 1:
                return <Line data={data}/>;
            default:
                return null;
        }
    }

    return (
        <>
            gg
            {getChart(type, data)}
        </>
    );
};

export default Chart;