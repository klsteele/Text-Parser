/*This function reads the text from the input box.
	1. displays the original text
	2. counts how many characters are written. 
	3. counts how many words are written (word is anything separated by a whitespace)
	4. reverses the order of the words
	5. displays all the vows
	6. displays all the consonants
	*/
function myFunction(){
	
	var x = document.getElementById("frm1");
	var text ="";
	var vow;
	var con;
	var formcontent;
	var revers;
	var i;
	for(i=0; i <x.length; i++){
		text += x.elements[i].value + "<br>";
	}
	formcontent = text.split(" ");
	 
	 revers = text.split(" ").reverse().join(" ");
	 vow = text.replace(/[^aeiouyAEIOUY]/g,'');
	 con = text.replace(/[aeiouyAEIOUY1234567890]/g,'');

	 document.getElementById("show").innerHTML = text;
	 document.getElementById("count").innerHTML = text.length-4;
	 document.getElementById("words").innerHTML = formcontent.length;
	 document.getElementById("reverse").innerHTML = revers;
	 document.getElementById("vowel").innerHTML = vow;
	 document.getElementById("cons").innerHTML = con;
	 
		
}

