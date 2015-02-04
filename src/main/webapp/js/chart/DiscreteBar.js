//Grooscript converted file @author: Alberto Navarrete
function DiscreteBar() {
  var gSobject = BaseChart();
  gSobject.clazz = { name: 'chart.DiscreteBar', simpleName: 'DiscreteBar'};
  gSobject.clazz.superclass = { name: 'chart.BaseChart', simpleName: 'BaseChart'};
  gSobject.drawChart = function(svgId, testdata) {
    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .staggerLabels(true)
            //.staggerLabels(testdata[0].values.length > 8)
            .tooltips(false)
            .showValues(true)
            .duration(250)
            ;

        d3.select(svgId)
            .datum(testdata)
            .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
    });
  }
  gSobject['DiscreteBar1'] = function(svgId) {
    gSobject.tittle = "Discrete Bar Chart";
    gs.mc(gSobject,"setDiscreteBarTestdata",[]);
    gSobject.chart = gs.mc(gSobject,"drawChart",[svgId, gSobject.testdata]);
    return this;
  }
  if (arguments.length==1) {gSobject.DiscreteBar1(arguments[0]); }
  
  return gSobject;
};
