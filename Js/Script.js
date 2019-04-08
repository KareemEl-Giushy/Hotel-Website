var text = document.getElementById("text"),
		text2 = document.getElementById("text2"),
		play = document.getElementById("play"),
		cleard = document.getElementById("cleard"),
		anim = document.getElementById("cards"),
		book = document.getElementById("book"),
		defult = document.getElementById("defult"),
		bookla = document.getElementById("bookla"),
		offe = document.getElementById("offe"),
		offerw = document.getElementById("offerw"),
		submits = document.getElementById("submits"),
		bookit = document.getElementsByClassName("bookit"),
		bookings =document.createElement("h2"),
		thetext = "Hi. Appssquare is awesome :) .",
		k = 0;
text.onfocus = function (){
    text.setAttribute("data",text.getAttribute("placeholder"));
    text.setAttribute("placeholder", "");
};
text.onblur = function (){
    text.setAttribute("placeholder",text.getAttribute("data"));
    text.setAttribute("data", "");
};
text2.onfocus = function (){
    this.innerHTML = "";
		this.value = "";
};
submits.onclick = function () {
	$("#thanks").slideDown(500);
};
play.onclick = function (){
	text2.innerHTML = "";
	text2.value = "";
	k = 0;
	var cleara = setInterval(function (){
		if(thetext.length-1 < k){
			cleara.clearInterval;
		}else{
			text2.textContent += thetext[k];
			text2.value += thetext[k];
			k++;
			console.log("Yes" , k);
		}
	}, 300);
};
cleard.onclick = function (){
	text2.textContent = "";
	text2.value = "";
};
//the Buttons animation
book.onclick = function (){
	anim.setAttribute("class", "hid");
	defult.style.backgroundColor = "#252e30";
	defult.style.color = "#FFF";
	book.style.backgroundColor = "#fff";
	book.style.color = "#34FF81";
	bookla.setAttribute("class", "booking-show");
	offerw.setAttribute("class", "booking-hid");
	offe.style.backgroundColor = "#252e30";
	offe.style.color = "#FFF";
};
defult.onclick = function (){
	this.style.backgroundColor = "#fff";
	this.style.color = "#34FF81";
	anim.setAttribute("class", "show cards");
	book.style.backgroundColor = "#252e30";
	book.style.color = "#FFF";
	bookla.setAttribute("class", "booking-hid");
	offerw.setAttribute("class", "booking-hid");
	offe.style.backgroundColor = "#252e30";
	offe.style.color = "#FFF";
}
offe.onclick = function (){
	offerw.setAttribute("class", "booking-show");
	this.style.backgroundColor = "#fff";
	this.style.color = "#34FF81";
	book.style.backgroundColor = "#252e30";
	book.style.color = "#FFF";
	defult.style.backgroundColor = "#252e30";
	defult.style.color = "#FFF";
	bookla.setAttribute("class", "booking-hid");
	anim.setAttribute("class", "hid");
};
document.getElementById("rooms").onclick = function (){
	scrollTo(0, 1062);
	defult.style.backgroundColor = "#fff";
	defult.style.color = "#34FF81";
	anim.setAttribute("class", "show cards");
	book.style.backgroundColor = "#252e30";
	book.style.color = "#FFF";
	bookla.setAttribute("class", "booking-hid");
	offerw.setAttribute("class", "booking-hid");
	offe.style.backgroundColor = "#252e30";
	offe.style.color = "#FFF";
	console.log("Scrolled");
};
document.getElementById("bookss").onclick = function (){
	scrollTo(0, 1062);
	anim.setAttribute("class", "hid");
	defult.style.backgroundColor = "#252e30";
	defult.style.color = "#FFF";
	book.style.backgroundColor = "#fff";
	book.style.color = "#34FF81";
	bookla.setAttribute("class", "booking-show");
	offerw.setAttribute("class", "booking-hid");
	offe.style.backgroundColor = "#252e30";
	offe.style.color = "#FFF";
	console.log("Scrolled");
};
document.getElementById("ser").onclick = function (){
	alert("Not Yet");
};
document.getElementById("rate").onclick = function (){
	prompt("Give Us 5 Stars :)");
};
bookit[0].onclick = function (){
	document.getElementById("booktext").innerHTML="You booked a room<br> with 20$/Night";
};
bookit[1].onclick = function (){
	bookings.setAttribute("class","fonty");
	if(document.getElementById("booktext").innerHTML!="You booked a room<br> with 20$/Night"){
		document.getElementById("booktext").textContent = "";
	}
	bookings.innerHTML ="You booked a room<br> with 50$/Day";
	bookla.appendChild(bookings);
};
