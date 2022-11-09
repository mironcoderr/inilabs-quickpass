var options = {
    series: [
        {
            name: "Visitors",
            data: [55, 65, 65, 65, 25, 25, 80, 53, 45, 47]
        }, 
        {
            name: "Pre-register",
            data: [13, 42, 65, 54, 76, 65, 35, 38, 25, 38,]
        }
    ],
    labels: [
        '2020-06-20', 
        '2020-06-21', 
        '2020-06-22', 
        '2020-06-23', 
        '2020-06-24', 
        '2020-06-25', 
        '2020-06-26',
        '2020-06-27',
        '2020-06-28',
        '2020-06-29',
    ],
    colors: [
        '#2A08FF', 
        '#00BCDE'
    ],
    chart: {
        type: "area",
        height: 400,
        fontFamily: 'inherit',
        parentHeightOffset: 0,
        toolbar: { show: false, },
    },
    stroke: {
        width: 2,
        lineCap: "round",
        curve: "smooth",
    },
    dataLabels: { enabled: false, },
    tooltip: { theme: 'dark' },
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
        axisBorder: { show: false, },
        type: 'datetime',
    },
    yaxis: {
        labels: {
            padding: 4,
            style: {
                fontFamily: "'Inter', 'sans-serif'",
                fontSize: '12px',
                fontWeight: 400,
            },
        },
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

var chart = new ApexCharts(document.querySelector("#register-chart"), options);

chart.render();