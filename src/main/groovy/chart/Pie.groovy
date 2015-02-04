package chart
/**
 * User: alnavart
 * Date: 02/01/15
 * Time: 00:53
 * To change this template use File | Settings | File Templates.
 */
import org.grooscript.asts.GsNative

class Pie extends BaseChart {

    Pie(svgId) {
        tittle = "Pie Chart"
        setTestdata()
        chart = drawChart(svgId, testdata)
    }

    @GsNative
    void drawChart(svgId, testdata) { /*

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
            */
    }
}
