package chart

/**
 * Created with IntelliJ IDEA.
 * User: alnavart
 * Date: 17/01/15
 * Time: 01:49
 * To change this template use File | Settings | File Templates.
 */
import org.grooscript.asts.GsNative

class HalfPie extends BaseChart {

    HalfPie(svgId) {
        tittle = "Half Pie Chart"
        setTestdata()
        chart = drawChart(svgId, tittle, testdata)
    }

    @GsNative
    private void drawChart(svgId, tittle, testdata) { /*

        nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .color(d3.scale.category20().range().slice(8))
            .growOnHover(false);

        // make it a half circle
        chart.pie
            .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
            .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

        // MAKES LABELS OUTSIDE OF DONUT
        //chart.pie.donutLabelsOutside(true).donut(true);

        d3.select(svgId)
            .datum(testdata)
            .transition().duration(1200)
            .call(chart);

        return chart;
    });

        */
    }
}
