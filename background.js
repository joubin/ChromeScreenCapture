chrome.browserAction.onClicked.addListener(function(tab) {
if( localStorage["username"] == null){
	alert("Please go to the option page to login");
}
 chrome.tabs.captureVisibleTab(null, function(img) {
    var xhr = new XMLHttpRequest(), formData = new FormData();  
    formData.append("img", img);
    formData.append("user", localStorage["username"]);
    formData.append("pass", localStorage["password"]);

	xhr.onreadystatechange = function (event) {
	    if (xhr.readyState === 4 && xhr.status === 200) {
	       var value = xhr.responseText; // value should equal "1234"
	        alert( "value = " + value );
	    }
	};
    xhr.open("POST", "path/to/your/site", true);
    xhr.send(formData);
  });
});


