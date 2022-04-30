import {useState} from "react";

import {ChartTypeSwitcher, ChartInputs, Chart} from "./components";

import {getChartData} from "./utils/Chart.util";

import './scss/app.scss';

function App() {
    const [labels, setLabels] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [chartType, setChart] = useState(0);

    /**
     * Просто добавь название графика
     * Импорты графиков находятся в папке utils
     */

    const items = ['bar', 'line'];

    const chartData = getChartData({labels, numbers});

    return (
        <div className="container">
            <ChartInputs
                updateDataX={setLabels}
                updateDataY={setNumbers}
            />
            <div className="chart">
                <Chart
                    data={chartData}
                    type={chartType}
                />
            </div>
            <ChartTypeSwitcher
                items={items}
                toggleChart={setChart}
            />
        </div>
    );
}

export default App;
