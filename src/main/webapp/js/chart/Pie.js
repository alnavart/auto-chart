//Grooscript converted file @author: Alberto Navarrete
function Pie() {
  var gSobject = BaseChart();
  gSobject.clazz = { name: 'chart.Pie', simpleName: 'Pie'};
  gSobject.clazz.superclass = { name: 'chart.BaseChart', simpleName: 'BaseChart'};
  gSobject.drawChart = function(svgId, testdata) {
    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y });

        d3.select(svgId)
            .datum(testdata)
            .transition().duration(1200)
            .call(chart);

        // update chart data values randomly
        setInterval(function() {
            testdata[0].y = Math.floor(Math.random() * 10);
            testdata[1].y = Math.floor(Math.random() * 10);
            chart.update();
        }, 4000);

        return chart;
    });
  }
  gSobject['Pie1'] = function(svgId) {
    gSobject.tittle = "Pie Chart";
    gs.mc(gSobject,"setTestdata",[]);
    gSobject.chart = gs.mc(gSobject,"drawChart",[svgId, gSobject.testdata]);
    return this;
  }
  if (arguments.length==1) {gSobject.Pie1(arguments[0]); }
  
  return gSobject;
};
