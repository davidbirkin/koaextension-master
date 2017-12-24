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
});


$(function(){
    $("#calcradio").on("click", function(){
        $("#calcrss").show();
        $("#lookupupgrades").hide();
    });
});

    
$(function(){
    $("#lookupradio").on("click", function(){
        $("#calcrss").hide();
        $("#lookupupgrades").show();
    });    
});


