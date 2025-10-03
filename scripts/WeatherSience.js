// Temperature Chart
const tempCtx = document.getElementById("temperatureChart").getContext("2d");
const temperatureChart = new Chart(tempCtx, {
  type: "line",
  data: {
    labels: [
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
    datasets: [
      {
        label: "Average Temperature (°C)",
        data: [5, 7, 12, 16, 20, 25, 28, 27, 23, 17, 11, 7],
        borderColor: "#ff6b6b",
        backgroundColor: "rgba(255, 107, 107, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Historical Average",
        data: [4, 6, 11, 15, 19, 24, 27, 26, 22, 16, 10, 6],
        borderColor: "#4db6ac",
        borderDash: [5, 5],
        tension: 0.4,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Temperature Trends",
        color: "#e9d985",
      },
      legend: {
        labels: {
          color: "#d8e2e9",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Temperature (°C)",
          color: "#d8e2e9",
        },
        grid: {
          color: "rgba(216, 226, 233, 0.1)",
        },
        ticks: {
          color: "#d8e2e9",
        },
      },
      x: {
        grid: {
          color: "rgba(216, 226, 233, 0.1)",
        },
        ticks: {
          color: "#d8e2e9",
        },
      },
    },
  },
});

// Rainfall Chart
const rainCtx = document.getElementById("rainfallChart").getContext("2d");
const rainfallChart = new Chart(rainCtx, {
  type: "bar",
  data: {
    labels: [
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
    datasets: [
      {
        label: "Rainfall (mm)",
        data: [85, 70, 65, 60, 55, 30, 15, 20, 45, 75, 80, 90],
        backgroundColor: "#4db6ac",
        borderColor: "#2c3e50",
        borderWidth: 1,
      },
      {
        label: "Rainy Days",
        data: [12, 10, 9, 8, 7, 4, 2, 3, 5, 9, 11, 13],
        type: "line",
        borderColor: "#f4d03f",
        backgroundColor: "rgba(244, 208, 63, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Rainfall Patterns",
        color: "#e9d985",
      },
      legend: {
        labels: {
          color: "#d8e2e9",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Rainfall (mm)",
          color: "#d8e2e9",
        },
        grid: {
          color: "rgba(216, 226, 233, 0.1)",
        },
        ticks: {
          color: "#d8e2e9",
        },
      },
      x: {
        grid: {
          color: "rgba(216, 226, 233, 0.1)",
        },
        ticks: {
          color: "#d8e2e9",
        },
      },
    },
  },
});

// Wind Chart
const windCtx = document.getElementById("windChart").getContext("2d");
const windChart = new Chart(windCtx, {
  type: "radar",
  data: {
    labels: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
    datasets: [
      {
        label: "Wind Frequency (%)",
        data: [15, 10, 5, 8, 12, 20, 25, 15],
        backgroundColor: "rgba(77, 182, 172, 0.2)",
        borderColor: "#4db6ac",
        pointBackgroundColor: "#4db6ac",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4db6ac",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Wind Direction Distribution",
        color: "#e9d985",
      },
      legend: {
        labels: {
          color: "#d8e2e9",
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 30,
        grid: {
          color: "rgba(216, 226, 233, 0.1)",
        },
        angleLines: {
          color: "rgba(216, 226, 233, 0.1)",
        },
        pointLabels: {
          color: "#d8e2e9",
        },
        ticks: {
          color: "#d8e2e9",
        },
      },
    },
  },
});

// Interactive controls
document.getElementById("timeRange").addEventListener("input", function () {
  document.getElementById("timeValue").textContent = this.value + " days";
});

document.getElementById("updateChart").addEventListener("click", function () {
  alert("Updating visualization with new parameters...");
});

document.getElementById("simulateWind").addEventListener("click", function () {
  alert("Wind pattern simulation started...");
});

document.getElementById("resetWind").addEventListener("click", function () {
  alert("Wind simulation reset...");
});

// Create a simple temperature map visualization
const temperatureMap = document.getElementById("temperatureMap");

// Add some random "hot" and "cold" spots to the map
for (let i = 0; i < 20; i++) {
  const spot = document.createElement("div");
  spot.style.position = "absolute";
  spot.style.width = Math.random() * 50 + 20 + "px";
  spot.style.height = spot.style.width;
  spot.style.borderRadius = "50%";
  spot.style.left = Math.random() * 90 + 5 + "%";
  spot.style.top = Math.random() * 80 + 10 + "%";

  // Random temperature between -10 and 40 degrees
  const temp = Math.random() * 50 - 10;

  if (temp < 0) {
    spot.style.backgroundColor = "rgba(26, 42, 108, 0.7)";
  } else if (temp < 10) {
    spot.style.backgroundColor = "rgba(58, 123, 213, 0.7)";
  } else if (temp < 20) {
    spot.style.backgroundColor = "rgba(76, 161, 175, 0.7)";
  } else if (temp < 30) {
    spot.style.backgroundColor = "rgba(165, 230, 186, 0.7)";
  } else {
    spot.style.backgroundColor = "rgba(255, 107, 107, 0.7)";
  }

  spot.style.boxShadow = "0 0 15px " + spot.style.backgroundColor;
  temperatureMap.appendChild(spot);
}
