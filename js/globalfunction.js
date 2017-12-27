$(document).ready(function() {
	$("#get-data").click(function(event){
		var myjson;
		$.getJSON('/js/buildings.json', function(jd) {
			
			myjson = jd;
			var e = document.getElementById("building_type");
			var btv = e.options[e.selectedIndex].value;
			var f = document.getElementById("building_level");
			var blv = f.options[f.selectedIndex].value;
            var g = document.getElementById("isuelt");
			var isu = g.options[g.selectedIndex].value;
			
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

                    // Food Information
                    if (isu == "orange"){
                        // Orange ISUELT Food!
                        var isufo = numberWithCommas(myjson[i].food*0.9-6000000);
                        // Check to see if value would be below 0 as to not output a negative value
                        if (isufo <= "0") {
                            // if negative value show 0
                            $('#show-data').append('<hr /><p>Food Req: 0</p>');
                        } else {
                            // Output reduced value with Orange Isuelt Gear
                            $('#show-data').append('<hr /><p>Food Req: ' + isufo + '</p>');
                        }
                    } else if (isu == "purple") {
                        // Purple ISUELT
                        var isufp = numberWithCommas(myjson[i].food*0.95-3000000); 
                        if (isufp <= "0") {
                            // if negative value show 0
                            $('#show-data').append('<hr /><p>Food Req: 0</p>');
                        } else {
                            // Output reduced value with Purple Isuelt Gear
                            $('#show-data').append('<hr /><p>Food Req: ' + isufp + '</p>');
                        }
                    } else if (isu == "blue") {
                        // Blue ISUELT Food!
                        var isufb = numberWithCommas(myjson[i].food-1500000); 
                        // Check to see if value would be below 0 as to not output a negative value
                        if (isufb <= "0") {
                            // if negative value show 0
                            $('#show-data').append('<hr /><p>Food Req: 0</p>');
                        } else {
                            // Output reduced value with Orange Isuelt Gear
                            $('#show-data').append('<hr /><p>Food Req: ' + isufb + '</p>');
                        }
                    } else if (isu == "none"){ 
                        $('#show-data').append('<hr /><p>Food Req: ' + numberWithCommas(myjson[i].food) + '</p>');
                    }                        


                    // Wood Information
                    if (isu == "orange"){
                        // Orange ISUELT wood!
                        var isuwo = numberWithCommas(myjson[i].wood*0.9-3000000);
                        if (isuwo <= "0") { 
                            $('#show-data').append('<p>Wood Req: 0</p>');
                        } else { 
                            $('#show-data').append('<p>Wood Req: ' + isuwo + '</p>');
                        }
                    } else if (isu == "purple") {
                        // Purple ISUELT
                        var isuwp = numberWithCommas(myjson[i].wood*0.95-1500000);
                        if (isuwp <= "0") {
                            // if negative value show 0
                            $('#show-data').append('<p>Wood Req: 0</p>');
                        } else {
                            // Output reduced value with Purple Isuelt Gear
                            $('#show-data').append('<p>Wood Req: ' + isuwp + '</p>');
                        }
                    } else if (isu == "blue") {
                        // Blue ISUELT
                        var isuwb = numberWithCommas(myjson[i].wood-750000);
                        if (isuwb <= "0") {
                            // if negative value show 0
                            $('#show-data').append('<p>Wood Req: 0</p>');
                        } else {
                            // Output reduced value with Purple Isuelt Gear
                            $('#show-data').append('<p>Wood Req: ' + isuwb + '</p>');
                        }
                    } else if (isu == "none") { 
                        $('#show-data').append('<p>Wood Req: ' + numberWithCommas(myjson[i].wood) + '</p>');
                    }


                    // Iron Ore Information
                    if (isu == "orange") { 
                        // Orange ISUELT iron
                        var isuio = numberWithCommas(myjson[i].iron*0.9-1200000);
                        if (isuio <= "0") { 
                            $('#show-data').append('<p>Iron Req: 0</p>');
                        } else {
                            $('#show-data').append('<p>Iron Req: ' + isuio + '</p>');    
                        } 
                    } else if (isu == "purple") {
                        // Purple ISUELT
                        var isuip = numberWithCommas(myjson[i].iron*0.95-600000);
                        if (isuip <= "0") {
                            // if negative value show 0
                            $('#show-data').append('<p>Iron Req: 0</p>');
                        } else {
                            // Output reduced value with Purple Isuelt Gear
                            $('#show-data').append('<p>Iron Req: ' + isuip + '</p>');
                        }
                    } else if (isu == "blue") {
                        // Blue ISUELT
                        var isuib = numberWithCommas(myjson[i].iron-600000);
                        if (isuib <= "0") {
                            // if negative value show 0
                            $('#show-data').append('<p>Iron Req: 0</p>');
                        } else {
                            // Output reduced value with Purple Isuelt Gear
                            $('#show-data').append('<p>Iron Req: ' + isuib + '</p>');
                        }
                    } else if (isu == "none") { 
                        $('#show-data').append('<p>Iron Req: ' + numberWithCommas(myjson[i].iron) + '</p>');
                    }


                    // Silver Information
                    if (isu == "orange") { 
                        // Orange ISUELT silver
                        var isuso = numberWithCommas(myjson[i].silver*0.9-600000);
                        if (isuso <= "0"){ 
                            $('#show-data').append('<p>Silver Req: 0</p>');
                        } else { 
                            $('#show-data').append('<p>Silver Req: ' + isuso + '</p>');
                        }  
                    } else if (isu == "purple") {
                        // Purple ISUELT
                        var isusp = numberWithCommas(myjson[i].silver*0.95-300000);
                        if (isusp <= "0") {
                            // if negative value show 0
                            $('#show-data').append('<p>Silver Req: 0</p>');
                        } else {
                            // Output reduced value with Purple Isuelt Gear
                            $('#show-data').append('<p>Silver Req: ' + isusp + '</p>');
                        }
                    // BLUE ISUELT HAS NO SILVER REDUCTION
                    } else if (isu == "none" || isu == "blue") { 
                        $('#show-data').append('<p>Silver Req: ' + numberWithCommas(myjson[i].silver) + '</p>');
                    }

                    // Build time
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