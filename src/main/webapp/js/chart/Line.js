//Grooscript converted file @author: Alberto Navarrete
function Line() {
  var gSobject = BaseChart();
  gSobject.clazz = { name: 'chart.Line', simpleName: 'Line'};
  gSobject.clazz.superclass = { name: 'chart.BaseChart', simpleName: 'BaseChart'};
  gSobject.drawChart = function(svgId, tittle, testdata) {
    nv.addGraph(function() {
        var chart = nv.models.lineChart();
        var fitScreen = false;
        var zoom = 1;

        chart.useInteractiveGuideline(true);
        chart.xAxis
            .tickFormat(d3.format(',r'));

        chart.lines.dispatch.on("elementClick", function(evt) {
            console.log(evt);
        });

        chart.yAxis
            .axisLabel('Voltage (v)')
            .tickFormat(d3.format(',.2f'));

        d3.select(svgId)
            .attr('perserveAspectRatio', 'xMinYMid')
            .datum(testdata);

        setChartViewBox();
        resizeChart();

        nv.utils.windowResize(resizeChart);

        d3.select('#zoomIn').on('click', zoomIn);
        d3.select('#zoomOut').on('click', zoomOut);


        function setChartViewBox() {
            d3.select(svgId)
                .transition().duration(500)
                .call(chart);
        }

        function zoomOut() {
            zoom += .25;
            setChartViewBox();
        }

        function zoomIn() {
            if (zoom <= .5) return;
            zoom -= .25;
            setChartViewBox();
        }

        // This resize simply sets the SVG's dimensions, without a need to recall the chart code
        // Resizing because of the viewbox and perserveAspectRatio settings
        // This scales the interior of the chart unlike the above
        function resizeChart() {
            var container = d3.select(svgId);
            var svg = container.select('svg');

            if (fitScreen) {
                // resize based on container's width AND HEIGHT
                var windowSize = nv.utils.windowSize();
                svg.attr("width", windowSize.width);
                svg.attr("height", windowSize.height);
            } else {
                // resize based on container's width
                var aspect = chart.width() / chart.height();
                var targetWidth = parseInt(container.style('width'));
                svg.attr("width", targetWidth);
                svg.attr("height", Math.round(targetWidth / aspect));
            }
        }
        return chart;
    });
  }
  gSobject['Line1'] = function(svgId) {
    gSobject.tittle = "Half Pie Chart";
    gs.mc(gSobject,"setLineTestdata",[]);
    gSobject.chart = gs.mc(gSobject,"drawChart",[svgId, gSobject.tittle, gSobject.testdata]);
    return this;
  }
  if (arguments.length==1) {gSobject.Line1(arguments[0]); }
  
  return gSobject;
};
