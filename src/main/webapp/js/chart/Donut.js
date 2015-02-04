//Grooscript converted file @author: Alberto Navarrete
function Donut() {
  var gSobject = BaseChart();
  gSobject.clazz = { name: 'chart.Donut', simpleName: 'Donut'};
  gSobject.clazz.superclass = { name: 'chart.BaseChart', simpleName: 'BaseChart'};
  gSobject.drawChart = function(svgId, testdata) {
    nv.addGraph(function() {
                var chart = nv.models.pieChart()
                        .x(function(d) { return d.key })
                        .y(function(d) { return d.y })
                        .donut(true)
                        .padAngle(.08)
                        .cornerRadius(5)
                        .id('donut1'); // allow custom CSS for this one svg

                chart.title("100%");
                chart.pie.donutLabelsOutside(true).donut(true);

                d3.select(svgId)
                        .datum(testdata)
                        .transition().duration(1200)
                        .call(chart);

                return chart;

            });
  }
  gSobject['Donut1'] = function(svgId) {
    gSobject.tittle = "Donut Chart";
    gs.mc(gSobject,"setTestdata",[]);
    gSobject.chart = gs.mc(gSobject,"drawChart",[svgId, gSobject.testdata]);
    return this;
  }
  if (arguments.length==1) {gSobject.Donut1(arguments[0]); }
  
  return gSobject;
};
