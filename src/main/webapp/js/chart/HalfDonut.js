//Grooscript converted file @author: Alberto Navarrete
function HalfDonut() {
  var gSobject = BaseChart();
  gSobject.clazz = { name: 'chart.HalfDonut', simpleName: 'HalfDonut'};
  gSobject.clazz.superclass = { name: 'chart.BaseChart', simpleName: 'BaseChart'};
  gSobject.drawChart = function(svgId, tittle, testdata) {
    nv.addGraph(function() {
                var chart = nv.models.pieChart()
                        .x(function(d) { return d.key })
                        .y(function(d) { return d.y })
                        .color(d3.scale.category20().range().slice(10))
                        .donut(true)
                        .id('donut2')
                        .titleOffset(-30)
                        .title(tittle);

                // MAKES IT HALF CIRCLE
                chart.pie
                        .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
                        .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

                d3.select(svgId)
                        .datum(testdata)
                        .transition().duration(1200)
                        .call(chart);

                return chart;
            });
  }
  gSobject['HalfDonut1'] = function(svgId) {
    gSobject.tittle = "Half Donut Chart";
    gs.mc(gSobject,"setTestdata",[]);
    gSobject.chart = gs.mc(gSobject,"drawChart",[svgId, gSobject.tittle, gSobject.testdata]);
    return this;
  }
  if (arguments.length==1) {gSobject.HalfDonut1(arguments[0]); }
  
  return gSobject;
};
