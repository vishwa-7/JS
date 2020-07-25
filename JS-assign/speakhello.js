(function(window){
	var hellospeaker={};
    hellospeaker.name = ["paul","frank","larry","paula","laura"];
	var speakword ="Hello";
	hellospeaker.hello = function speak(name){
	for (i=0 ; i<hellospeaker.name.length;i++){
		console.log(speakword + hellospeaker.name[i]);
	}
}
	// hellospeaker.hello = function speak(name){
	// 	console.log(speakword + "" +  hellospeaker.name);
	// }
	window.hellospeaker = hellospeaker;
})(window);