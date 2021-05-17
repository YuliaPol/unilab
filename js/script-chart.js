$( document ).ready(function() {
    let percentItems = document.querySelectorAll('.point-value');
    for (let i = 0; i < percentItems.length; i++) {
        let pointVal = percentItems[i].innerHTML;
        if (pointVal == 0){
            $(percentItems[i]).closest('div').hide();
        }else {
            $(percentItems[i]).closest('div').show();
            $(percentItems[i]).closest('div').css('width',(pointVal) + '%');
        }
    }
});
//Официальные источники
$(document).ready(function(){
    let percentValItems = document.querySelectorAll('.website-chart-data-wrapper .point-count');
    for (let i = 0; i < percentValItems.length; i++){
        let percentVal = percentValItems[i].innerHTML;
        let percentLine = document.querySelectorAll('.websites-data .point-box');
        $(percentLine[i]).css('width', (percentVal) + '%');
    }
});

    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            let ctx = this.chart.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = '#BDDA1C';
                ctx.shadowBlur = 8;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });

    if (null !== document.getElementById('linesChart')) {
        var ctx = document.getElementById('linesChart').getContext("2d");
        var redGradientFill = ctx.createLinearGradient(0, 0, 100, 200);
        redGradientFill.addColorStop(0, "rgba(253, 142, 142, 0.5)");
        redGradientFill.addColorStop(1, "rgba(255, 206, 206, 0.5)");

        var greenGradientFill = ctx.createLinearGradient(0, 0, 0, 200);
        greenGradientFill.addColorStop(0, 'rgba(31, 174, 104, 0.5)');
        greenGradientFill.addColorStop(1, 'rgba(178, 221, 106, 0.05)');

        var orangeGradientFill = ctx.createLinearGradient(0, 0, 0, 200);
        orangeGradientFill.addColorStop(0, 'rgba(254, 152, 68, 0.5)');
        orangeGradientFill.addColorStop(1, 'rgba(252, 207, 170, 0.095)');
    
        var linesChart = new Chart(ctx,{
            type: 'line',
            data: {
                labels: ["12.10", "13.10", "14.10", "15.10", "16.10", "17.10", "18.10"],
                datasets: [
                    {
                    label: "",
                    borderColor: "#EA5151",
                    pointBorderColor: "rgba(0, 0, 0, 0)",
                    pointBackgroundColor: "rgba(0, 0, 0, 0)",
                    pointHoverBackgroundColor: "#EA5151",
                    pointHoverBorderColor: "#EA5151",
                    pointBorderWidth: 10,
                    pointHoverRadius: 10,
                    pointHoverBorderWidth: 1,
                    pointRadius: 3,
                    fill: true,
                    backgroundColor: redGradientFill,
                    borderWidth: 4,
                    data: [10, 40, 35, 62, 13, 87, 41],
                },
                {
                    label: "",
                    borderColor: "#1FAE68",
                    pointBorderColor: "rgba(0, 0, 0, 0)",
                    pointBackgroundColor: "rgba(0, 0, 0, 0)",
                    pointHoverBackgroundColor: "#1FAE68",
                    pointHoverBorderColor: "#1FAE68",
                    pointBorderWidth: 10,
                    pointHoverRadius: 10,
                    pointHoverBorderWidth: 1,
                    pointRadius: 3,
                    fill: true,
                    backgroundColor: greenGradientFill,
                    borderWidth: 4,
                    data: [23, 58, 41, 65, 70, 70, 42]
                },
                {
                    label: "",
                    borderColor: "#FE9844",
                    pointBorderColor: "rgba(0, 0, 0, 0)",
                    pointBackgroundColor: "rgba(0, 0, 0, 0)",
                    pointHoverBackgroundColor: "#FE9844",
                    pointHoverBorderColor: "#FE9844",
                    pointBorderWidth: 10,
                    pointHoverRadius: 10,
                    pointHoverBorderWidth: 1,
                    pointRadius: 3,
                    fill: true,
                    backgroundColor: orangeGradientFill,
                    borderWidth: 4,
                    data: [59, 67, 32, 20, 18, 37, 28]
                },
            ]},
            options: {
                responsive: true,
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            fontSize: 13,
                            beginAtZero: true,
                            suggestedMax: 90,
                            suggestedMin: 0,
                            min: 0,
                            max: 90,
                            stepSize: 10,
                        },
                        gridLines: {
                            drawTicks: true,
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true
                            },
                        ticks: {
                            padding: 20,
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            fontSize: 13,
                        }
                    }]
                },
                plugins: {
                    datalabels: {
                        formatter: function () {
                            return '';
                        },
                        font: {
                            size: '14',
                            weight: "normal"
                        },
                        color: "#000"
                    }
                },
            }
        });

        var alertStatisticVerticalChartData3 = {
            labels: [
                "Всего",
                "Закрыто",
                "В работе",
                "Новый",
                "Просрочен"
            ],
            datasets: [{
                label: '',
                data: [
                    3,
                    2,
                    4,
                    7,
                    6
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        };
    }

    
    
    if (null !== document.getElementById('alert-statistic-chart-canvas')) {
        var alertStatisticChartCanvas = document.getElementById("alert-statistic-chart-canvas").getContext('2d');
        var alertStatisticChart = new Chart(alertStatisticChartCanvas, {
            type: 'horizontalBar',
            data: alertStatisticVerticalChartData3,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    fontSize: 0,
                    position: 'right',
                    fullWidth: true,
                    labels: {
                        padding: 10,
                        boxWidth: 15
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMax: 10,
                            max: 10,
                            beginAtZero: true,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            suggestedMax: 10,
                            suggestedMin: 0,
                            beginAtZero: true
                        }
                    }]
                },
                plugins: {
                    datalabels: {
                        formatter: function () {
                            return '';
                        },
                        font: {
                            size: '14',
                            weight: "normal"
                        },
                        color: "#000"
                    }
                },

            }
        });


        am4core.useTheme(am4themes_animated);
        // Create chart instance
        var chart = am4core.create("pieChart", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0;
        // Add data
        chart.data = [{
        "socialNetwork": "Одноклассники",
        "litres": 500,
        "color": am4core.color("#85D2F0")
        }, {
        "socialNetwork": "Instagram",
        "litres": 391.1,
        "color": am4core.color("#EE8E7B")
        }, {
        "socialNetwork": "Facebook",
        "litres": 287,
        "color": am4core.color("#FF8D8E")
        }, {
        "socialNetwork": "Ютуб",
        "litres": 365.8,
        "color": am4core.color("#FEC03D")
        }, {
        "socialNetwork": "Google maps",
        "litres": 439.9,
        "color": am4core.color("#FFE700")
        }, {
        "socialNetwork": "Yandex maps",
        "litres": 328.3,
        "color": am4core.color("#7AA0D7")
        },{
        "socialNetwork": "Официальный сайт",
        "litres": 341.9,
        "color": am4core.color("#82F886")
        },
        {
        "socialNetwork": "моб. приложение",
        "litres": 701.9,
        "color": am4core.color("#C6B7E8")
        },];

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "socialNetwork";

        pieSeries.ticks.template.disabled = true;
        pieSeries.alignLabels = false;
        pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
        pieSeries.labels.template.radius = am4core.percent(-40);
        pieSeries.labels.template.fill = am4core.color("white");
        pieSeries.labels.template.fontSize = 14;
        pieSeries.tooltip.autoTextColor = false;
        pieSeries.tooltip.label.fill = am4core.color("#FFFFFF");
        pieSeries.slices.template.propertyFields.fill = "color";
            
        pieSeries.labels.template.adapter.add("radius", function(radius, target) {
            if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
                return 0;
            }
            return radius;
        });

        pieSeries.labels.template.adapter.add("fill", function(color, target) {
            if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
                return am4core.color("rgba(0,0,0,0)");
            }
            return color;
        });

        var shadow = pieSeries.filters.push(new am4core.DropShadowFilter());
        shadow.dx = 10;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.opacity = 0.25;

        $(document).ready(function(){
            $("g[aria-labelledby]").hide();
        });
    }

    