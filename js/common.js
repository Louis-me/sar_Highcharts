/**
 * Created by Administrator on 2016/1/6.
 */
function to1024(num){
    return parseFloat(parseFloat(num/1024).toFixed(2));
}
function getNotNullArr(arrT){
    var temp= [];
    for(var i =0; i<arrT.length; i++){
        if(arrT[i]!=""){
            temp.push(arrT[i]);
        }
    }
    return temp;
}

