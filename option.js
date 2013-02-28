function saveChanges() {
  var theUser = user.value;
  var thePass = pass.value;
  var realID = localStorage["id"];
  localStorage["mainLogin"] = theUser;

   var xhr = new XMLHttpRequest(), formData = new FormData();  
    formData.append("user", theUser);
    formData.append("pass", thePass);
    formData.append("realID", realID);


	xhr.onreadystatechange = function (event) {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	       var theResponse = xhr.responseText; 
	
				if( theResponse == 1){
					localStorage["mainLogin"] = theUser;
					alert("All good, you can begin");
					chrome.tabs.getCurrent(function(tab) {
					    chrome.tabs.remove(tab.id, function() { });
					});
				};
				if(theResponse == 0){
					alert("Wrong user or passowrd");
				};
				if(theResponse != 0 && theResponse != 1){
					alert("getting id");
					localStorage["mainLogin"] = theUser;
					localStorage["id"] = theResponse;
					chrome.tabs.getCurrent(function(tab) {
					    chrome.tabs.remove(tab.id, function() { });
					});
				};	
	    }
	};
    xhr.open("POST", "http://example.com//Signups/check.php", true);
    xhr.send(formData);

}

window.onload=function (){
    document.getElementById('ok').onclick=saveChanges;

}