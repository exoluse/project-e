/*
project-e
by exoluse 
++ eclipse Git
*/
////////////////////////////////// start
var projectE = (function() { return {
////////////////////////////////// start


/*
selectCheckboxAll
*/
selectCheckboxAll: function(name){
	
	var selectedObj = document.getElementsByName(name);

	for(var i=0;i<selectedObj.length;i++){
		selectedObj[i].checked = true;
	}
},


/*
selectCheckboxByName
*/
selectCheckboxByName: function(name, val){
	
	var selectedObj = document.getElementsByName(name);
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value==val){
			selectedObj[i].checked = true;
		}
	}
},

/*
selectCheckboxIntMore
*/
selectCheckboxIntMore: function(name, val){
	
	var selectedObj = document.getElementsByName(name);
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value > val){
			selectedObj[i].checked = true;
		}
	}
},

/*
selectCheckboxIntLess
*/
selectCheckboxIntLess: function(name, val){
	
	var selectedObj = document.getElementsByName(name);
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value < val){
			selectedObj[i].checked = true;
		}
	}
},


/*
selectCheckboxIntRange
*/
selectCheckboxIntRange: function(name, val1, val2){
	
	var selectedObj = document.getElementsByName(name);
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value >= val1 && selectedObj[i].value <= val2){
			selectedObj[i].checked = true;
		}
	}
}


//////////////// end
}; })();
/////////////// end