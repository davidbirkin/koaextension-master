var container = $('div.container');

$('input#get').click(function(){
    $.ajax({
        type: 'GET',
        url: '/js/buildings.json',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, item) { 
                $.each(item, function(key, value) { 
                    container.append(key + ': ' + value + '<br/>');
                })
                container.append('<br/><br/>');
            });
        }
    });
})


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