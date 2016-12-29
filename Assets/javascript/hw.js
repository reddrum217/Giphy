// http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC

// alert(hi);

// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   

// The array of my food choices
var foods = ["Cherry Pie", "Brownies", "Cupcakes", "Macaroons", "Cookies", "Fudge", "Hot Cocoa", "Ice Cream"];

for (i = 0; i < foods.length; i++) {

	var btn = $("<button>").attr('class', 'btn btn-success');
	btn.append(foods[i]);

	$("#giphs").append(btn);

	// $("#giphs").append("<button class='btn btn-success'>" + foods[i] + "</button>");

};