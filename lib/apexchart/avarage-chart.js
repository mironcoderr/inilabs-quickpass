var options = {
    series: [
        {
            name: "Avarage Minutes",
            data: [65, 25, 55, 85, 45]
        }
    ],
    labels: [
        '10:30 AM', 
        '11:30 AM', 
        '12:00 AM', 
        '01:30 PM', 
        '02:00 PM'
    ],
    colors: [function({ value }) {
        if(value < 30) { return '#FF7053' } 
        else if (value > 30 && value < 60) { return '#00BCDE' } 
        else { return '#0054BB' }
    }],
    chart: {
        type: "bar",
        height: 380,
        fontFamily: 'inherit',
        parentHeightOffset: 0,
        toolbar: { show: false },
        animations: { enabled: false },
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            columnWidth: '40%',
            distributed: true,
        }
    },
    dataLabels: { enabled: false },
    tooltip: { theme: 'dark' },
    legend: { show: false },
    fill: { opacity: 1 },
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
        labels: { padding: 0 },
        tooltip: { enabled: false },
        axisBorder: { show: false },
        type: 'time',
    },
    yaxis: {
        labels: {
            padding: 4
        },
    },
}

var chart = new ApexCharts(document.querySelector("#avarage-chart"), options);

chart.render();