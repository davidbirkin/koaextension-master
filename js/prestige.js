$(document).ready(function() {
	$("#get-p").click(function(event){
		var mypjson;
		$.getJSON('/js/prestige.json', function(jp) {

			mypjson = jp;
			var a = document.getElementById("building_type_p");
			var btp = a.options[a.selectedIndex].value;
			var b = document.getElementById("building_level_p");
			var blp = b.options[b.selectedIndex].value;
			
            
            for (var i = 0; i < mypjson.length; i++){
                if (mypjson[i].id == btp + " " + blp){
                    $('#show-p').html('<p> Building: ' + mypjson[i].id + '</p>');
                    $('#show-p').append('<p>Banners Req: ' + mypjson[i].banners + '</p>');
                    $('#show-p').append('<p>Buff 1: ' + mypjson[i].bufftype1 + ': ' + mypjson[i].bufftype1amount + '%</p>');
					
					// Show additional buffs if more than one is provided
                    if (mypjson[i].bufftype2 == "-") {
                        // do nothing 
                    } else {
                        $('#show-p').append('<p>Buff 2: ' + mypjson[i].bufftype2 + ': ' + mypjson[i].bufftype2amount + '%</p>');
                    }
					
					if (mypjson[i].bufftype3 == "-") {
                        // do nothing 
                    } else {
                        $('#show-p').append('<p>Buff 3: ' + mypjson[i].bufftype3 + ': ' + mypjson[i].bufftype3amount + '%</p>');
                    }
					
					// Show Power Gain
					$('#show-p').append('<p>Power Gain: ' + numberWithCommas(mypjson[i].powergain) + '</p><hr />');
				}
			}
		});
	});
});