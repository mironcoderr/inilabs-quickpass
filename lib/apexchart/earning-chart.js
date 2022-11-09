var options = {
    series: [
        {
            name: "Earnings",
            data: [0, 80, 100, 180, 200, 150, 250]
        }
    ],
    colors: [
        '#FF7723',
    ],
    chart: {
        type: "line",
        height: 380,
        fontFamily: 'inherit',
        parentHeightOffset: 0,
        toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    markers: { size: 5 },
    tooltip: { theme: 'dark' },
    legend: { show: false },
    stroke: {
        width: 3,
        lineCap: "round",
        curve: "smooth",
    },
    grid: {
        strokeDashArray: 4,
        padding: {
            top: -20,
            right: 0,
            left: -4,
            bottom: -4
        },
    },
    xaxis: {
        labels: {
            padding: 0,
            style: {
                fontFamily: "'Inter', 'sans-serif'",
                fontSize: '12px',
                fontWeight: 400,
            },
        },
        tooltip: { enabled: false },
        axisBorder: { show: false },
        categories: ['Nov 2021', 'Dec 2021', 'Jan 2022', ' Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022'],
    },
    yaxis: {
        labels: {
            padding: 4,
        },
    },
}

var chart = new ApexCharts(document.querySelector("#earning-chart"), options);

chart.render();