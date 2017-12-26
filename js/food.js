function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$(function() {
    $("#food1").on('keyup change mousedown', function (){
        var f1m = document.getElementById('food1').value;
        var f1r = f1m * 1000;
        document.getElementById('f1').innerHTML = numberWithCommas(f1r);
        gettotalfood();
    });
});

$(function() {
    $("#food2").on('keyup change mousedown', function (){
        var f2m = document.getElementById('food2').value;
        var f2r = f2m * 3000;
        document.getElementById('f2').innerHTML = numberWithCommas(f2r);
        gettotalfood();
    });
});

$(function() {
    $("#food3").on('keyup change mousedown', function (){
        var f3m = document.getElementById('food3').value;
        var f3r = f3m * 5000;
        document.getElementById('f3').innerHTML = numberWithCommas(f3r);
        gettotalfood();
    });
});

$(function() {
    $("#food4").on('keyup change mousedown', function (){
        var f4m = document.getElementById('food4').value;
        var f4r = f4m * 10000;
        document.getElementById('f4').innerHTML = numberWithCommas(f4r);
        gettotalfood();
    });
});

$(function() {
    $("#food5").on('keyup change mousedown', function (){
        var f5m = document.getElementById('food5').value;
        var f5r = f5m * 30000;
        document.getElementById('f5').innerHTML = numberWithCommas(f5r);
        gettotalfood();
    });
});

$(function() {
    $("#food6").on('keyup change mousedown', function (){
        var f6m = document.getElementById('food6').value;
        var f6r = f6m * 50000;
        document.getElementById('f6').innerHTML = numberWithCommas(f6r);
        gettotalfood();
    });
});

$(function() {
    $("#food7").on('keyup change mousedown', function (){
        var f7m = document.getElementById('food7').value;
        var f7r = f7m * 150000;
        document.getElementById('f7').innerHTML = numberWithCommas(f7r);
        gettotalfood();
    });
});

function gettotalfood(){ 
    var total = 0;
    var f1r = document.getElementById('food1').value * 1000;
    var f2r = document.getElementById('food2').value * 3000;
    var f3r = document.getElementById('food3').value * 5000;
    var f4r = document.getElementById('food4').value * 10000;
    var f5r = document.getElementById('food5').value * 30000;
    var f6r = document.getElementById('food6').value * 50000;
    var f7r = document.getElementById('food7').value * 150000;
    total = total + f1r + f2r + f3r + f4r + f5r + f6r + f7r;
    document.getElementById('ft').innerHTML = numberWithCommas(total);
};