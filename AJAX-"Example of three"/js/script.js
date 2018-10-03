var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
var pageCounter = 1;
btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
	ourRequest.onload = function () {
		var Dataa = ourRequest.responseText
		var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData[0])
		renderHTML(ourData);
		pageCounter++;
		if (pageCounter>3){
			btn.classList.add("hide-me")
		}
	};
ourRequest.send();	
});

function renderHTML(data){
	var htmlString = "";

	for (var i = 0; i < data.length; i++){
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes eating ";
		for (var ii=0; ii < data[i].foods.likes.length; ii++){
			if (ii == 0){
				htmlString += data[i].foods.likes[0]
			}
			else{
				htmlString += " and " + data[i].foods.likes[0]

			}
		}
		htmlString+=".</p>"	

	};
	animalContainer.insertAdjacentHTML("beforeend",htmlString)

};