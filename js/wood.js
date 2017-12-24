function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$(function() {
    $("#wood1").on('keyup change mousedown', function (){
        var w1m = document.getElementById('wood1').value;
        var w1r = w1m * 1000;
        document.getElementById('w1').innerHTML = numberWithCommas(w1r);
        gettotalwood();
    });
});

$(function() {
    $("#wood2").on('keyup change mousedown', function (){
        var w2m = document.getElementById('wood2').value;
        var w2r = w2m * 3000;
        document.getElementById('w2').innerHTML = numberWithCommas(w2r);
        gettotalwood();
    });
});

$(function() {
    $("#wood3").on('keyup change mousedown', function (){
        var w3m = document.getElementById('wood3').value;
        var w3r = w3m * 5000;
        document.getElementById('w3').innerHTML = numberWithCommas(w3r);
        gettotalwood();
    });
});

$(function() {
    $("#wood4").on('keyup change mousedown', function (){
        var w4m = document.getElementById('wood4').value;
        var w4r = w4m * 10000;
        document.getElementById('w4').innerHTML = numberWithCommas(w4r);
        gettotalwood();
    });
});

$(function() {
    $("#wood5").on('keyup change mousedown', function (){
        var w5m = document.getElementById('wood5').value;
        var w5r = w5m * 30000;
        document.getElementById('w5').innerHTML = numberWithCommas(w5r);
        gettotalwood();
    });
});

$(function() {
    $("#wood6").on('keyup change mousedown', function (){
        var w6m = document.getElementById('wood6').value;
        var w6r = w6m * 50000;
        document.getElementById('w6').innerHTML = numberWithCommas(w6r);
        gettotalwood();
    });
});

$(function() {
    $("#wood7").on('keyup change mousedown', function (){
        var w7m = document.getElementById('wood7').value;
        var w7r = w7m * 150000;
        document.getElementById('w7').innerHTML = numberWithCommas(w7r);
        gettotalwood();
    });
});

function gettotalwood(){ 
    var total = 0;
    var w1r = document.getElementById('wood1').value * 1000;
    var w2r = document.getElementById('wood2').value * 2000;
    var w3r = document.getElementById('wood3').value * 5000;
    var w4r = document.getElementById('wood4').value * 10000;
    var w5r = document.getElementById('wood5').value * 30000;
    var w6r = document.getElementById('wood6').value * 50000;
    var w7r = document.getElementById('wood7').value * 150000;
    total = total + w1r + w2r + w3r + w4r + w5r + w6r + w7r;
    document.getElementById('wt').innerHTML = numberWithCommas(total);
};