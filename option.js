function saveChanges() {
  var theCity = city.value;
  var theState = state.value;
  var theEmail = email.value;
  var theAge = age.value;
  var theGender = gender.value;
  var theOther = other.value;
	alert("theCity is: "+ theCity);
	alert("theState is: "+ theState);
	alert("theEmail is: "+ theEmail);
	alert("theAge is: "+ theAge);
	alert("theGender is: "+ theGender);
	alert("theOther is: "+ theOther);



	alert("Okay, got your user and pass. Just close the page now!");
	
}

window.onload=function (){
    document.getElementById('ok').onclick=saveChanges;

}