import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ActiveTicketsPriority = () => {
  const donutChartRef = useRef(null); // Reference for the donut chart container

  // Donut Chart (Active Tickets Priority)
  const donutChartOptions = {
    chart: {
      type: "donut", // Donut chart type
      height: 340, // Increased height
    },
    series: [5, 8, 3, 2], // Example data for priority levels
    labels: ["Low", "Medium", "High", "None"],
    colors: ["#34D399", "#60A5FA", "#F87171", "#1aada1"], // Tailwind Colors
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true, // Ensure data labels are enabled
      formatter: function (val) {
        return Math.round(val); // Round the number to a whole number
      },
    },
  };

  useEffect(() => {
    const donutChart = new ApexCharts(donutChartRef.current, donutChartOptions);
    donutChart.render();

    return () => {
      donutChart.destroy();
    };
  });

  return <div ref={donutChartRef} className="h-96"></div>;
};

export default ActiveTicketsPriority;
