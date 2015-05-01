/*
project-e
by exoluse 
*/
////////////////////////////////// start
var PE = (function() { return {
////////////////////////////////// start

/*
domSel
*/
domSel: function(type, name){
	
	var selectedObj;

	if(type=="#"){
		selectedObj = document.getElementById(name);
	}

	if(type=="$"){
		selectedObj = document.getElementsByName(name);
	}
	return selectedObj;
},



/*
chkCboxAllByName
*/
chkCboxAllByName: function(name){
	
	var selectedObj = PE.domSel("$", name);

	for(var i=0;i<selectedObj.length;i++){
		selectedObj[i].checked = true;
	}
},


/*
chkCboxByValueByName
*/
chkCboxByValueByName: function(name, val){
	
	var selectedObj = PE.domSel("$", name);
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value.toString()==val){
			selectedObj[i].checked = true;
		}
	}
},

/*
chkCboxIntMoreByName
*/
chkCboxIntMoreByName: function(name, val){
	
	var selectedObj = PE.domSel("$", name);
	
	for(var i=0;i<selectedObj.length;i++){

		if(parseInt(selectedObj[i].value) > parseInt(val)){
			selectedObj[i].checked = true;
		}
	}
},

/*
chkCboxIntLessByName
*/
chkCboxIntLessByName: function(name, val){
	
	var selectedObj = PE.domSel("$", name);
	
	for(var i=0;i<selectedObj.length;i++){

		if(parseInt(selectedObj[i].value) < parseInt(val)){
			selectedObj[i].checked = true;
		}
	}
},


/*
chkCboxIntRangeByName
*/
chkCboxIntRangeByName: function(name, val1, val2){
	
	var selectedObj = PE.domSel("$", name);
	
	for(var i=0;i<selectedObj.length;i++){

		if(parseInt(selectedObj[i].value) >= parseInt(val1) && parseInt(selectedObj[i].value) <= parseInt(val2)){
			selectedObj[i].checked = true;
		}
	}
},


/*
chkCboxStrStartAtByName
*/
chkCboxStrStartAtByName: function(name, val){
	
	var selectedObj = PE.domSel("$", name);
	var valLength = val.toString().length; // 스트링으로 파싱해줘야 한다.
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value.substring(0, valLength)==val){
			selectedObj[i].checked = true;
		}
	}
},


/*
chkCboxStrEndToByName
*/
chkCboxStrEndToByName: function(name, val){
	
	var selectedObj = PE.domSel("$", name);
	var valLength = val.toString().length; // 스트링으로 파싱해줘야 한다.
	
	
	for(var i=0;i<selectedObj.length;i++){

		if(selectedObj[i].value.substring(selectedObj[i].value.length-valLength, selectedObj[i].value.length)==val){
			selectedObj[i].checked = true;
		}
	}
},


/*
chkCboxStrLikeByName
*/
chkCboxStrLikeByName: function(name, val){
	
	var selectedObj = PE.domSel("$", name);
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
//////////////// end