/**
 * Created by Administrator on 2016/1/6.
 */

//var h_title;
//var h_sub_title="";
//var h_xaxis_setp=10;
//var h_xaxis_categories=[];
//var h_yaxis_title="";
//var h_tooltip="";
//var h_series = [{}];
//id = #id
function highchartsinit(id,h_title,h_sub_title,h_xaxis_setp,h_xaxis_categories,h_yaxis_title,h_tooltip,h_series){
    $(id).highcharts({
        title: {
            text: h_title,
            x: -20 //center
        },
        subtitle: {
            text: h_sub_title,
            x: -20
        },
        xAxis: {
            labels: {
                step: h_xaxis_setp
            },
            categories: h_xaxis_categories
        },
        yAxis: {
            title: {
                text: h_yaxis_title
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: h_tooltip
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 1
        },
        series: h_series
    });

}
