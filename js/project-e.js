/*
project-e
by exoluse 
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
},


/*
selectCheckboxStrStartAt
*/
selectCheckboxStrStartAt: function(name, val){
	
	var selectedObj = document.getElementsByName(name);
	var valLength = val.toString().length; // 스트링으로 파싱해줘야 한다.
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value.substring(0, valLength)==val){
			selectedObj[i].checked = true;
		}
	}
},


/*
selectCheckboxStrEndTo
*/
selectCheckboxStrEndTo: function(name, val){
	
	var selectedObj = document.getElementsByName(name);
	var valLength = val.toString().length; // 스트링으로 파싱해줘야 한다.
	
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value.substring(selectedObj[i].value.length-valLength, selectedObj[i].value.length)==val){
			selectedObj[i].checked = true;
		}
	}
},


/*
selectCheckboxStrLike
*/
selectCheckboxStrLike: function(name, val){
	
	var selectedObj = document.getElementsByName(name);
	var valLength = val.toString().length; // 스트링으로 파싱해줘야 한다.

	for(var i=0;i<selectedObj.length;i++){

		for(var j=0;j<selectedObj[i].value.toString().length-1;j++){

			if(selectedObj[i].value.substring(j, valLength+j)==val){
				selectedObj[i].checked = true;
			}
		}
	}
}





//////////////// end
}; })();
=======
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