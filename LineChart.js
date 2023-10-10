import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
);

function LineGraph() {
  const [chartData, setChartData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [{
      label: "My First dataset",
      data: [3.5],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1
    }]
  });

  const addNewPoint = () => {
    // Generate a new random data point (you can replace this with your own logic)
    const newPoint = Math.floor(Math.random() * 6);

    // Clone the existing data and add the new point
    const newData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          labels: [...chartData.labels, chartData.labels.length + 1],
          data: [...chartData.datasets[0].data, newPoint],
        },
      ],
    };

    // Update the chart data
    setChartData(newData);
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 7
      }
    }
  };

  return (
    <div style={{
      width: 600,
      height: 400,
    }}
    >
      <Line
        data={chartData}
        options={options}
      />
      <button onClick={addNewPoint}>Dodaj kurwie miodu</button>
    </div>
  );
}

export default LineGraph;
