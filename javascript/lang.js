function choselang() {
	var language = window.navigator.userLanguage || window.navigator.language;
   
	window.location = "https://google.pl";
	return language;
}

function default_lang() {
	var language = window.navigator.userLanguage || window.navigator.language;	
	if (language == "pl") {
		document.getElementById("lang").selectedIndex = 1 ;
		document.getElementById("button_go").innerHTML = "Wejdź na stronę";
	}else {
		document.getElementById("lang").selectedIndex = 2 ;
		document.getElementById("button_go").innerHTML = "Enter the website";
	}
}

function lang_go() {
    var sel = document.getElementById("lang").selectedIndex ;
    
    if (sel == 1){
	window.location = "pl";
	}else{
	    window.location = "en";
	}
}
