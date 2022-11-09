var options = {
    series: [15, 60, 25],
    labels: ["From Office", "From Home", "On Leave"],
    colors: [function({ value }) {
        if(value < 20) { return '#FFB74E' } 
        else if (value > 20 && value < 50) { return '#00BCDE' } 
        else { return '#00D7AF' }
    }],
    plotOptions: {
        pie: {
            size: 250,
            donut: {
                size: '45%',
                distributed: true,
            }
        }
    },
    chart: {
        height: 430,
        type: "donut",
        fontFamily: 'inherit',
        sparkline: { enabled: true },
        animations: { enabled: false },
    },
    fill: { opacity: 1 },
    tooltip: { theme: 'dark' },
    grid: { strokeDashArray: 4 },
    legend: {
        show: true,
        position: "bottom",
        horizontalAlign: 'left',
        fontFamily: "'Inter', 'sans-serif'",
        fontSize: '16px',
        fontWeight: 500,
        itemMargin: {
            horizontal: 18,
            vertical: 8,
        },
        markers: {
            radius: 3,
            width: 18,
            height: 18,
            offsetX: -5,
        },
    },
    dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        formatter: function (val) {
            return val + "%"
        },
        style: {
            fontFamily: "'Inter', 'sans-serif'",
            fontSize: '18px',
            fontWeight: 500,
            colors: undefined
        },
        background: {
            enabled: true,
            foreColor: '#fff',
            padding: 4,
            borderRadius: 2,
            borderWidth: 0,
            borderColor: '#fff',
            opacity: 0.9,
            dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#000',
                opacity: 0.45
            }
        },
        dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
        }
    },
    tooltip: {
        fillSeriesColor: false
    },
}

var chart = new ApexCharts(document.querySelector("#attendance-chart"), options);

chart.render();