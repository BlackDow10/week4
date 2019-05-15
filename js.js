today = new Date()
$("#date").html(today.getFullYear()+ "." + (today.getMonth() + 1) + "." + today.getDate() )

advice = "http://sf-pyw.mosyag.in/m04/api/forecasts"
$("#header").click(function() {
	$.getJSON(advice, function(data) {
		paragraphs = data["prophecies"]
		set_content_in_divs(paragraphs)
		$(".col").css("border", "1px solid black")
	})
})

function set_content_in_divs(paragraphs) {
	$.each(paragraphs, function(i, d) {
    p = $("#col" + i)
    p.html("<p>" + d + "</p>")
    })
}