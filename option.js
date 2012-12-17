function saveChanges() {
  var theCity = city.value;
  var theState = state.value;
  var theEmail = email.value;
  var theAge = age.value;
  var theGender = gender.value;
  var theOther = other.value;
	

   var xhr = new XMLHttpRequest(), formData = new FormData();  
    formData.append("city", theCity);
    formData.append("state", theState);
    formData.append("email", theEmail);
    formData.append("age", theAge);
    formData.append("gender", theGender);
    formData.append("other", theOther);

	xhr.onreadystatechange = function (event) {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	       var theValue = xhr.responseText; // value should equal "1234"
			localStorage["mainLogin"] = theValue;
	    }
	};
    xhr.open("POST", "UploadSite", true);
    xhr.send(formData);
	alert("Okay, now the extension is ready to be used.");

	chrome.tabs.getCurrent(function(tab) {
	    chrome.tabs.remove(tab.id, function() { });
	});
	
}

window.onload=function (){
    document.getElementById('ok').onclick=saveChanges;

}