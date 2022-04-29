import {useState} from "react";

import {ChartTypeSwitcher, ChartInputs, Chart} from "./components";

import {getChartData} from "./utils/Chart.util";

import './scss/app.scss';

function App() {
    const [labels, setLabels] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [chartType, setChart] = useState(0);

    const items = ['bar', 'line'];

    const chartData = getChartData({labels, numbers});

    return (
        <div className="container">
            <header>
                <ChartInputs
                    updateDataX={setLabels}
                    updateDataY={setNumbers}
                />
            </header>
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
