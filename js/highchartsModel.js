/**
 * Created by Administrator on 2016/1/6.
 */
var h_title;
var h_sub_title="";
var h_xaxis_setp=10;
var h_xaxis_categories=[];
var h_yaxis_title="";
var h_tooltip="";
var h_series = [{}];

function set_h_title(title){
    h_title = title;
}
function get_h_title(title){
    return h_title;
}
function set_h_sub_title(title){
    h_sub_title = title;
}
function get_h_sub_title(){
    return h_sub_title;
}
function set_h_xaxis_setp(setp){
    h_xaxis_setp = setp;
}
function get_h_xaxis_setp(){
    return h_xaxis_setp;
}
function set_h_xaxis_categories(categories){
    h_xaxis_categories = categories;
}
function get_h_xaxis_categories(){
    return h_xaxis_categories;
}
function set_h_yaxis_title(title){
    h_yaxis_title = title;
}
function get_h_yaxis_title(){
    return h_yaxis_title;
}
function set_h_tooltip(tips){
    h_tooltip = tips;
}
function get_h_tooltip(){
    return h_tooltip;
}
function set_h_series(series){
    h_series = series;
}
function get_h_series(){
    return h_series;
}