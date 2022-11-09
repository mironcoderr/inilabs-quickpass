var options = {
    chart: {
        type: "bar",
        fontFamily: 'inherit',
        parentHeightOffset: 0,
        height: 400,
        toolbar: { show: false },
        animations: { enabled: true },
    },
    plotOptions: {
        bar: {
            columnWidth: '60%',
            borderRadius: 4,
        }
    },
    dataLabels: { enabled: false },
    tooltip: { theme: 'dark' },
    fill: { opacity: 1 },
    series: [
        {
            name: "Basic",
            data: [30, 95, 50, 40, 60, 50, 78]
        },
        {
            name: "Standard",
            data: [200, 130, 90, 240, 130, 220, 359]
        },
        {
            name: "Premium",
            data: [300, 200, 160, 400, 250, 250, 93]
        }
    ],
    grid: {
        padding: {
            top: -20,
            right: 0,
            left: -4,
            bottom: -4
        },
        strokeDashArray: 4,
    },
    xaxis: {
        labels: { padding: 0 },
        tooltip: { enabled: false },
        axisBorder: { show: false },
        categories: ['Nov 2021', 'Dec 2021', 'Jan 2022', ' Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022'],
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
    colors: ['#00D7AF', '#1F7BEB', '#00BCDE'],
    legend: {
        show: false,
    },
    stroke: {
        colors: ["transparent"],
        width: 8
    },
    legend: {
        show: true,
        position: "top",
        horizontalAlign: 'left',
        fontFamily: "'Inter', 'sans-serif'",
        fontSize: '16px',
        fontWeight: 500,
        itemMargin: {
            horizontal: 10,
        },
        markers: {
            radius: 3,
            width: 18,
            height: 18,
            offsetX: -5,
        },
    },
}

var chart = new ApexCharts(document.querySelector("#subscription-chart"), options);

chart.render();