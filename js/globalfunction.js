$(document).ready(function() {
	$("#get-data").click(function(event){
		var myjson;
		$.getJSON('/js/buildings.json', function(jd) {
			
			myjson = jd;
			var e = document.getElementById("building_type");
			var btv = e.options[e.selectedIndex].value;
			var f = document.getElementById("building_level");
			var blv = f.options[f.selectedIndex].value;
			
			//$.each(jd, function(key, val) {
				for (var i = 0; i < myjson.length; i++){
					if (myjson[i].id == btv + " " + blv){
						$('#show-data').html('<p> Building: ' + myjson[i].id + '</p>');
						$('#show-data').append('<p>Requirement 1: ' + myjson[i].pre1 + '</p>');
                        if (myjson[i].pre2 == "-") {
                            // do nothing 
                        } else {
                            $('#show-data').append('<p>Requirement 2: ' + myjson[i].pre2 + '</p>');
                        }
                        if (myjson[i].pre3 == "-") {
                            // do nothing 
                        } else {
                            $('#show-data').append('<p>Requirement 3: ' + myjson[i].pre3 + '</p>');
                        }
						$('#show-data').append('<hr /><p>Food Req: ' + numberWithCommas(myjson[i].food) + '</p>');
						$('#show-data').append('<p>Wood Req: ' + numberWithCommas(myjson[i].wood) + '</p>');
						$('#show-data').append('<p>Iron Req: ' + numberWithCommas(myjson[i].iron) + '</p>');
						$('#show-data').append('<p>Silver Req: ' + numberWithCommas(myjson[i].silver) + '</p>');
						$('#show-data').append('<hr /><p>Build Time: ' + myjson[i].build_time + '</p><hr />');
					}
				}
	   });
	});		
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





/* var container = $('div.jsoncontainer');
$('input#get').click(function(){
    $.ajax({
        type: 'GET',
        url: '/js/buildings.json',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, item) { 
                $.each(item, function(key, value) { 
                    container.append(key + ': ' + value + '<br/>');
                });
                container.append('<br/><br/>');
            });
        }
    });
}) */