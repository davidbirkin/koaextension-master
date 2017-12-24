function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$(function() {
    $("#iron1").on('keyup change mousedown', function (){
        var i1m = document.getElementById('iron1').value;
        var i1r = i1m * 200;
        document.getElementById('i1').innerHTML = numberWithCommas(i1r);
        gettotaliron();
    });
});

$(function() {
    $("#iron2").on('keyup change mousedown', function (){
        var i2m = document.getElementById('iron2').value;
        var i2r = i2m * 600;
        document.getElementById('i2').innerHTML = numberWithCommas(i2r);
        gettotaliron();
    });
});

$(function() {
    $("#iron3").on('keyup change mousedown', function (){
        var i3m = document.getElementById('iron3').value;
        var i3r = i3m * 1000;
        document.getElementById('i3').innerHTML = numberWithCommas(i3r);
        gettotaliron();
    });
});

$(function() {
    $("#iron4").on('keyup change mousedown', function (){
        var i4m = document.getElementById('iron4').value;
        var i4r = i4m * 2000;
        document.getElementById('i4').innerHTML = numberWithCommas(i4r);
        gettotaliron();
    });
});

$(function() {
    $("#iron5").on('keyup change mousedown', function (){
        var i5m = document.getElementById('iron5').value;
        var i5r = i5m * 6000;
        document.getElementById('i5').innerHTML = numberWithCommas(i5r);
        gettotaliron();
    });
});

$(function() {
    $("#iron6").on('keyup change mousedown', function (){
        var i6m = document.getElementById('iron6').value;
        var i6r = i6m * 10000;
        document.getElementById('i6').innerHTML = numberWithCommas(i6r);
        gettotaliron();
    });
});

$(function() {
    $("#iron7").on('keyup change mousedown', function (){
        var i7m = document.getElementById('iron7').value;
        var i7r = i7m * 30000;
        document.getElementById('i7').innerHTML = numberWithCommas(i7r);
        gettotaliron();
    });
});

function gettotaliron(){ 
    var total = 0;
    var i1r = document.getElementById('iron1').value * 200;
    var i2r = document.getElementById('iron2').value * 600;
    var i3r = document.getElementById('iron3').value * 1000;
    var i4r = document.getElementById('iron4').value * 2000;
    var i5r = document.getElementById('iron5').value * 6000;
    var i6r = document.getElementById('iron6').value * 10000;
    var i7r = document.getElementById('iron7').value * 30000;
    total = total + i1r + i2r + i3r + i4r + i5r + i6r + i7r;
    document.getElementById('it').innerHTML = numberWithCommas(total);
};