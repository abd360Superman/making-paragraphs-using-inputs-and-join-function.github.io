function getPara1(){
    var inputs_para_1 = [];
    for(var i = 1; i <= 6; i++) {
        inputs_para_1.push(document.getElementById("div1_box"+i).value);
        console.log("inputs_para_1");
    }
    document.getElementById("showPara1").innerHTML = inputs_para_1.join(". ");
}
function getPara2(){
    var inputs_para_2 = [];
    for(var i = 1; i <= 6; i++) {
        inputs_para_2.push(document.getElementById("div2_box"+i).value);
        console.log("inputs_para_2");
    }
    document.getElementById("showPara1").innerHTML = inputs_para_2.join(". ");
}