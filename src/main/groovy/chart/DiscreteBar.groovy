package chart

import org.grooscript.asts.GsNative

/**
 * Created with IntelliJ IDEA.
 * User: alnavart
 * Date: 19/01/15
 * Time: 19:16
 * To change this template use File | Settings | File Templates.
 */
class DiscreteBar extends BaseChart {

    DiscreteBar(svgId) {
        tittle = "Discrete Bar Chart"
        setDiscreteBarTestdata()
        chart = drawChart(svgId, testdata)
    }

    @GsNative
    void drawChart(svgId, testdata) { /*

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
            */
    }
}
