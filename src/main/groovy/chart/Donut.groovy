package chart

import org.grooscript.asts.GsNative

/**
 * Created with IntelliJ IDEA.
 * User: alnavart
 * Date: 17/01/15
 * Time: 12:36
 * To change this template use File | Settings | File Templates.
 */
class Donut extends BaseChart {

    Donut(svgId) {
        tittle = "Donut Chart"
        setTestdata()
        chart = drawChart(svgId, testdata)
    }

    @GsNative
    void drawChart(svgId, testdata) { /*

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
            */
    }
}
