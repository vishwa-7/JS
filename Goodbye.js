(function(window){
	var byespeaker ={};
	 byespeaker.name = ["jiji","joo","jai","jara"];
	 var speakerword ="Goodbye";
	 byespeaker.bye = function speak(name){
	 	for( i=0 ; i<byespeaker.name.length; i++){
	 		console.log(speakerword  + byespeaker.name[i]);
	 	}
	 }
	// byespeaker.bye = function speak(name){
	// 	console.log(speakerword  +""  + byespeaker.name);
	// }
	window.byespeaker = byespeaker;

})(window);