/*$(document).ready(function(){
    $("button").click(function(){
        var xhr = new XMLHttpRequest;
        xhr.open("GET", chrome.extension.getURL("/js/buildings.json"));
        xhr.onreadystatechange = function() {
          if (this.readyState == 4) {
            /*******************************/
             //var data = "js/buildings.json";
             //var parsedData = JSON.parse(data);
             //var buildings = parsedData[0];
             //alert(buildings);
            /********************************              
            console.log("request finished, now parsing");
            window.json_text = xhr.responseText;
            window.parsed_json = JSON.parse(xhr.responseText);
            console.log("parse results:");
            console.dir(window.parsed_json);
          };
        };
        xhr.send();
    });
});*/

$.ajax({
    dataType: 'text',
    success: function(string) {
        var data = $.parseJSON(string);
        document.getElementById('demo').innerHTML = (JSON.stringify(data.building[0]));
    },
    url: '/js/buildings.json'
});



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