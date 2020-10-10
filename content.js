$(document).ready(function(){
    $('div.pro > a').each(function(){
	  var zm = $(this);
	  var td = zm.attr('href');
	  //console.log(td);
	  /*$.getJSON(td, {contentid : url},function (data) {
			var kargo = $("#productShipmentDetail > div > div > div.standartInfo > div:nth-child(3) > span:nth-child(2)").text();
            $("#content").html(data);
      });*/
	  
	  /*$.get( td, function( data ) {
			var r = $(data);
			r.find("#productShipmentDetail > div > div > div.standartInfo > div:nth-child(3) > span:nth-child(2)").text();   
		});
		
		$.get( td, function( data, status ) {
			//var r = $(data);
			//r.find("#productShipmentDetail > div > div > div.standartInfo > div:nth-child(3) > span:nth-child(2)").text();   
			
			console("Data: " + data + "\nStatus: " + status);
		});*/
		
		var tdm = td.replace("https://urun.", "https://www.");
		//console.log(td);
		$.ajax({
			url: tdm,
			beforeSend: function(jqXHR, settings) { 
			}, 
			success: function(result) {  
                var r = $(result);
				var p = r.find("#productShipmentDetail > div > div > div.standartInfo > div:nth-child(3) > span:nth-child(2)").text(); 
                console.log(p)
 
                zm.parent().closest('div').find('span.ratingText').text(p);
                zm.parent().closest('div').find('span.ratingText').css("font-weight","Bold").css("font-size","14px").css("color","black");
				zm.parent().closest('div').find("a > h3").prepend(" >> "+ p + " << ");
			}
		});
		
	});
});