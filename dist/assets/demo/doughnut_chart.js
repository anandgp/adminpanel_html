google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Desert', 11],
        ['Beverage', 2],
        ['Alcohol', 2],
        ['Bread', 2],
        ['Veggies', 7]
    ]);

    var options = {
        pieHole: 0.5,
        circumference: 2,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}