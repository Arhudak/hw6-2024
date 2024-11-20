var video;


//Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

//Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.querySelector("#player1");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

//Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.pause();
	console.log("Pause Video");
});

//Slow Down Button
document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate *= 0.90;
	console.log("New speed is " + video.playbackRate);
});


//Speed Up Button
document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate /= 0.90;
	console.log("New speed is " + video.playbackRate);
});

//Skip Ahead Button
document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Going back to beginning");
	} else {
		video.currentTime += 10;
		console.log("Skipping ahead 15 seconds");
	}
});


//Mute Button
document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
}); 

//Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
	video = document.querySelector("#player1");
	video.volume = this.value / 100;
	console.log("Volume is " + this.value);
	document.querySelector("#volume").innerHTML = this.value + "%";
});

//Styled Old School Button
document.querySelector("#vintage").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.classList.add("oldSchool");//this is the class name in the css file
	console.log("Old School");
}	);

//Original Button
document.querySelector("#orig").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.classList.remove("oldSchool");
	console.log("Removed Old School");
}	);

	