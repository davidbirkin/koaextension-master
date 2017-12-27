function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(function () {
    $('#rssdropdown').change(function(){
        $('.resource').hide();
        $('#' + $(this).val()).show();
    });
}); 

// Short-form of `document.ready`
$(function(){
    $("#calcrss").hide();
    $("#lookupupgrades").hide();
    $("#lookupprestige").hide();
});


$(function(){
    $("#calcradio").on("click", function(){
        $("#calcrss").show();
        $("#lookupupgrades").hide();
        $("#lookupprestige").hide();
    });
});

    
$(function(){
    $("#lookupradio").on("click", function(){
        $("#calcrss").hide();
        $("#lookupupgrades").show();
        $("#lookupprestige").hide();
    });    
});

$(function(){
    $("#prestigebtn").on("click", function(){
        $("#calcrss").hide();
        $("#lookupupgrades").hide();
        $("#lookupprestige").show();
    });    
});