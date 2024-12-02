import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const TicketOverview = () => {
  const lineChartRef = useRef(null); // Reference for the line chart container

  const lineChartOptions = {
    chart: {
      type: "line", // Line chart type
      height: 340, // Increased height
      toolbar: { show: false },
    },
    series: [
      {
        name: "Tickets",
        data: [0, 6, 8, 10, 12, 10, 8, 4, 2, 20, 24, 26], // Example data
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#4F46E5"],
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
    },
  };

  useEffect(() => {
    
    // Render the charts
    const lineChart = new ApexCharts(lineChartRef.current, lineChartOptions);
    lineChart.render();

    // Cleanup charts on component unmount
    return () => {
      lineChart.destroy();
    };
  }, []);

  return <div ref={lineChartRef} className="h-96"></div>;
};

export default TicketOverview;
