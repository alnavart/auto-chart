/**
 * Created with IntelliJ IDEA.
 * User: alnavart
 * Date: 21/01/15
 * Time: 21:58
 * To change this template use File | Settings | File Templates.
 */
require.config({
    baseUrl: 'js/lib',
    paths: {
        "chart": "../chart",
        "app": "../app",
        "jquery": "jquery.min",
        "d3": "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min"
    }
});

require(['jquery','grooscript.min', 'grooscript-tools', 'd3',
    'nvd3/build/nv.d3', 'chart/BaseChart', 'chart/Pie','chart/HalfPie', 'chart/Donut',
    'chart/HalfDonut', 'chart/Line', 'chart/DiscreteBar',
    'chart/MultiBar'],
    function( $ ) {
        $(document).ready(function () {
            console.log('hola ke ase');
            Pie('#pie');
            HalfPie('#halfPie');
            Donut('#donut');
            HalfDonut('#halfDonut');
            Line('#line');
            DiscreteBar('#discreteBar');
            MultiBar('#multiBar');
        });
    });
