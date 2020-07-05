// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart 1
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: "Revenue",
            backgroundColor: "rgba(255,193,7,1)",
            borderColor: "rgba(255,193,7,1)",
            data: [9821, 4215, 5312, 13984, 6251, 7841, 3846],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'day'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});

// Bar Chart 1
var ctx = document.getElementById("myBarChart2");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00"],
        datasets: [{
            label: "Revenue",
            backgroundColor: "rgba(255,193,7,1)",
            borderColor: "rgba(255,193,7,1)",
            data: [2193, 9846, 13912, 10304, 6251, 7841, 3846, 6731, 4380],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'hour'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 15000,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});