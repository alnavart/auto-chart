package chart

/**
 * Created with IntelliJ IDEA.
 * User: alnavart
 * Date: 16/01/15
 * Time: 23:06
 * To change this template use File | Settings | File Templates.
 */
class BaseChart {

    private tittle
    private testdata
    private chart

    private setTestdata(){
        testdata = [
                [key: "One", y: 10],
                [key: "Two", y: 2],
                [key: "Three", y: 9],
                [key: "Four", y: 7],
                [key: "Five", y: 4],
                [key: "Six", y: 3],
                [key: "Seven", y: 0.5],
        ]
    }

    private setLineTestdata(){
        testdata = [
                [key: "One", values: [
                        [x: 10, y: 10],
                        [x: 11, y: 2],
                        [x: 12, y: 9],
                        [x: 13, y: 7],
                        [x: 14, y: 4],
                        [x: 15, y: 3],
                        [x: 16, y: 0.5]
                ]],
                [key: "Two", values: [
                        [x: 8, y: 5],
                        [x: 11, y: 12],
                        [x: 12, y: 9],
                        [x: 13, y: 5],
                        [x: 14, y: 6],
                        [x: 15, y: 3],
                        [x: 17, y: 9]
                ]]
        ]
    }

    private setDiscreteBarTestdata() {
        testdata = [
                [key: "Data Series", values: [
                        [label: "One", value: 10],
                        [label: "Two", value: 2],
                        [label: "Three", value: 9],
                        [label: "Four", value: 7],
                        [label: "Five", value: 4],
                        [label: "Six", value: 3],
                        [label: "Seven", value: 0.5]
                ]]
            ]
    }
}
