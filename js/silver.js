function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$(function() {
    $("#silver1").on('keyup change mousedown', function (){
        var s1m = document.getElementById('silver1').value;
        var s1r = s1m * 50;
        document.getElementById('s1').innerHTML = numberWithCommas(s1r);
        gettotalsilver();
    });
});

$(function() {
    $("#silver2").on('keyup change mousedown', function (){
        var s2m = document.getElementById('silver2').value;
        var s2r = s2m * 150;
        document.getElementById('s2').innerHTML = numberWithCommas(s2r);
        gettotalsilver();
    });
});

$(function() {
    $("#silver3").on('keyup change mousedown', function (){
        var s3m = document.getElementById('silver3').value;
        var s3r = s3m * 250;
        document.getElementById('s3').innerHTML = numberWithCommas(s3r);
        gettotalsilver();
    });
});

$(function() {
    $("#silver4").on('keyup change mousedown', function (){
        var s4m = document.getElementById('silver4').value;
        var s4r = s4m * 500;
        document.getElementById('s4').innerHTML = numberWithCommas(s4r);
        gettotalsilver();
    });
});

$(function() {
    $("#silver5").on('keyup change mousedown', function (){
        var s5m = document.getElementById('silver5').value;
        var s5r = s5m * 1500;
        document.getElementById('s5').innerHTML = numberWithCommas(s5r);
        gettotalsilver();
    });
});

$(function() {
    $("#silver6").on('keyup change mousedown', function (){
        var s6m = document.getElementById('silver6').value;
        var s6r = s6m * 2500;
        document.getElementById('s6').innerHTML = numberWithCommas(s6r);
        gettotalsilver();
    });
});

function gettotalsilver(){ 
    var total = 0;
    var s1r = document.getElementById('silver1').value * 50;
    var s2r = document.getElementById('silver2').value * 150;
    var s3r = document.getElementById('silver3').value * 250;
    var s4r = document.getElementById('silver4').value * 500;
    var s5r = document.getElementById('silver5').value * 1500;
    var s6r = document.getElementById('silver6').value * 2500;
    total = total + s1r + s2r + s3r + s4r + s5r + s6r;
    document.getElementById('st').innerHTML = numberWithCommas(total);
};