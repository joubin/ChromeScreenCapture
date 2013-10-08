chrome.browserAction.onClicked.addListener(function(tab) {
	if( localStorage["id"] == null){
		var asd = new XMLHttpRequest();
		asd.onreadystatechange = function() {
		    if (asd.readyState == 4) {
		        localStorage["id"] = asd.responseText;
		    }
		}
		asd.open('GET', 'http://example.com/uploads3/test.php', true); // Get a uniqID for every extension on each computer
		asd.send(null);	
			
	};
	if( localStorage["mainLogin"] == null){
	alert("Please go to the option page to login");
	chrome.tabs.create({'url': chrome.extension.getURL('option.html')}, function(tab) {
	  // Tab opened.
	});
	return false; //stops the rest of the code
	}
 	chrome.tabs.captureVisibleTab(null, function(img) {
	chrome.browserAction.setBadgeText ( { text: "Uploading" } );
	setTimeout(function () {
	    chrome.browserAction.setBadgeText( { text: "" } );
	}, 1000);
	//send the data, this works just like like a html form works. 
	var xhr = new XMLHttpRequest(), formData = new FormData();  
    formData.append("user", localStorage["mainLogin"]);
    formData.append("userID", localStorage["id"]);
 	formData.append("img", img);
 	formData.append("url", tab.url);
	//alert(localStorage["mainLogin"]);
	//alert(img);
	//Get image stuff
	xhr.onreadystatechange = function (event) {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	       var theResponse = xhr.responseText;
		//	alert("PictureID is "+ theResponse + " userID=" + localStorage["id"]);
		//alert(theResponse);
		if(theResponse != "Stop Cheating! This has been reported.")
			chrome.windows.create({'url': "http://example.com/uploads4/prototype2.php?pictureID="+ theResponse + "&userID=" + localStorage["id"]+"&username="+  localStorage["mainLogin"]}, function(tab) {
			  // open window
			});
	}};	

    xhr.open("POST", "http://example.com/uploads4/upload_file.php", true);
    xhr.send(formData);
	
  });
});


