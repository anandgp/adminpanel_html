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


// var chart = AmCharts.makeChart("chartdiv", {
//     "type": "pie",
//     "theme": "light",
//     "dataProvider": [{
//         "title": "New",
//         "value": 4852
//     }, {
//         "title": "Returning",
//         "value": 9899
//     }],
//     "titleField": "title",
//     "valueField": "value",
//     "labelRadius": 5,

//     "radius": "42%",
//     "innerRadius": "60%",
//     "labelText": "[[title]]",
//     "export": {
//         "enabled": true
//     }
// });

// document.getElementsByTagName('button')[0].onclick = function(e) {

//     chart.export.capture({}, function() {
//         this.toJPG({}, function(data) {
//             this.download(data, "image/jpg", "amCharts.jpg");
//         });
//     });

// }