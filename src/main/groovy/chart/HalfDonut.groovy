package chart

import org.grooscript.asts.GsNative

/**
 * Created with IntelliJ IDEA.
 * User: alnavart
 * Date: 17/01/15
 * Time: 12:36
 * To change this template use File | Settings | File Templates.
 */
class HalfDonut extends BaseChart {

    HalfDonut(svgId) {
        tittle = "Half Donut Chart"
        setTestdata()
        chart = drawChart(svgId, tittle, testdata)
    }

    @GsNative
    private void drawChart(svgId, tittle, testdata) { /*

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
        */
    }
}
