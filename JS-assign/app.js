hellospeaker.hello();
byespeaker.bye();
(function (){
	var names = ["paul","joo","frank","larry","jiji","paula","jara","laura","jai"];
	for (var i=0;i<names.length;i++){
		var firstLetter=names[i].charAt(0).toLowerCase();
		if (firstLetter === 'j') {
          byespeaker.bye(names[i]);
         } else {
          hellospeaker.hello(names[i]);
     }
  
	}
})();