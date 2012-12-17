chrome.browserAction.onClicked.addListener(function(tab) {
if( localStorage["mainLogin"] == null){
	alert("Please go to the option page to login");
}
 chrome.tabs.captureVisibleTab(null, function(img) {
	chrome.browserAction.setBadgeText ( { text: "working..." } );
	setTimeout(function () {
	    chrome.browserAction.setBadgeText( { text: "" } );
	}, 1000);
    var xhr = new XMLHttpRequest(), formData = new FormData();  
    formData.append("user", localStorage["mainLogin"]);
 	formData.append("img", img);
	alert(localStorage["mainLogin"]);
	alert(img);

    xhr.open("POST", "UploadSite", true);
    xhr.send(formData);
	
  });
});


