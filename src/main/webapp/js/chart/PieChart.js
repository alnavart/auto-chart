//Grooscript converted file @author: Alberto Navarrete
function PieChart() {
  var gSobject = BaseChart();
  gSobject.clazz = { name: 'chart.PieChart', simpleName: 'PieChart'};
  gSobject.clazz.superclass = { name: 'chart.BaseChart', simpleName: 'BaseChart'};
  gSobject.chart = null;
  gSobject.drawPieChart = function(svgId, testdata, height, width) {
    nv.addGraph(function() {
                var chart = nv.models.pieChart()
                        .x(function(d) { return d.key })
                        .y(function(d) { return d.y })
                        .donut(true)
                        .width(width)
                        .height(height)
                        .padAngle(.08)
                        .cornerRadius(5)
                        .id('donut1'); // allow custom CSS for this one svg

                chart.title("100%");
                chart.pie.donutLabelsOutside(true).donut(true);

                d3.select(svgId)
                        .datum(testdata)
                        .transition().duration(1200)
                        .attr('width', width)
                        .attr('height', height)
                        .call(chart);

                return chart;

            });
  }
  gSobject.drawHalfPieChart = function(svgId, testdata, height, width) {
    nv.addGraph(function() {
                var chart = nv.models.pieChart()
                        .x(function(d) { return d.key })
                        .y(function(d) { return d.y })
                    //.labelThreshold(.08)
                    //.showLabels(false)
                        .color(d3.scale.category20().range().slice(10))
                        .width(width)
                        .height(height)
                        .donut(true)
                        .id('donut2')
                        .titleOffset(-30)
                        .title("woot");

                // MAKES IT HALF CIRCLE
                chart.pie
                        .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
                        .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

                d3.select(svgId)
                    //.datum(historicalBarChart)
                        .datum(testdata)
                        .transition().duration(1200)
                        .attr('width', width)
                        .attr('height', height)
                        .call(chart);

                return chart;
            });
  }
  gSobject['PieChart0'] = function(it) {
    gs.mc(gSobject,"setTestdata",[]);
    gs.mc(gSobject,"setSize",[]);
    var svgId = "#test1";
    gSobject.chart = gs.mc(gSobject,"drawPieChart",[svgId, gSobject.testdata, gSobject.height, gSobject.width]);
    return this;
  }
  if (arguments.length==0) {gSobject.PieChart0(); }
  gSobject['PieChart1'] = function(svgId) {
    gs.mc(gSobject,"setTestdata",[]);
    gs.mc(gSobject,"setSize",[]);
    gSobject.chart = gs.mc(gSobject,"drawHalfPieChart",[svgId, gSobject.testdata, gSobject.height, gSobject.width]);
    return this;
  }
  if (arguments.length==1) {gSobject.PieChart1(arguments[0]); }
  
  return gSobject;
};
