//Grooscript converted file @author: Alberto Navarrete
function MultiBar() {
  var gSobject = BaseChart();
  gSobject.clazz = { name: 'chart.MultiBar', simpleName: 'MultiBar'};
  gSobject.clazz.superclass = { name: 'chart.BaseChart', simpleName: 'BaseChart'};
  gSobject.drawChart = function(svgId, testdata) {
    nv.addGraph(function() {
        chart = nv.models.multiBarChart()
            .barColor(d3.scale.category20().range())
            .duration(300)
            .margin({bottom: 100, left: 70})
            .rotateLabels(45)
            .groupSpacing(0.1)
        ;

        chart.reduceXTicks(false).staggerLabels(true);

        chart.xAxis
            .axisLabel("ID of Furry Cat Households")
            //.axisLabelDistance(35)
            .showMaxMin(false)
            //.tickFormat(d3.format(',.6f'))
        ;

        chart.yAxis
            .axisLabel("Change in Furry Cat Population")
            //.axisLabelDistance(-5)
            //.tickFormat(d3.format(',.01f'))
        ;

        chart.dispatch.on('renderEnd', function(){
            nv.log('Render Complete');
        });

        d3.select(svgId)
            .datum(testdata)
            .call(chart);

        nv.utils.windowResize(chart.update);

        chart.dispatch.on('stateChange', function(e) {
            nv.log('New State:', JSON.stringify(e));
        });
        chart.state.dispatch.on('change', function(state){
            nv.log('state', JSON.stringify(state));
        });

        return chart;
    });
  }
  gSobject['MultiBar1'] = function(svgId) {
    gSobject.tittle = "Discrete Bar Chart";
    gs.mc(gSobject,"setLineTestdata",[]);
    gSobject.chart = gs.mc(gSobject,"drawChart",[svgId, gSobject.testdata]);
    return this;
  }
  if (arguments.length==1) {gSobject.MultiBar1(arguments[0]); }
  
  return gSobject;
};
