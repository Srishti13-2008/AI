song1=""
song2=""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
scoreleftWrist=0
scorerightWrist=0
function preload(){
    song1=loadSound("Butter.mp3")
    song2=loadSound("dynamite.mp3")
}
function setup(){
    canvas= createCanvas(600,500)
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotposes)
}
function modelloaded(){
    console.log(results)
}
function draw() {
	image(video, 0, 0, 600, 500);
	
	song1_status = song1.isPlaying();
	song2_status = song2.isPlaying();

	fill("#FF0000");
	stroke("#FF0000");

	if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

			song2.stop();

		if(song1_status == false)
		{
			song1.play();
			document.getElementById("song").innerHTML = "Playing - Butter"
		}
	}

	if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

			song1.stop();

		if(song2_status == false)
		{
			song2.play();
			document.getElementById("song").innerHTML = "Playing - Dynamite"
		}
	}

}
function play(){
    song1.play()
    song2.play()
    song1.setVolume(1)
    song1.rate(1)
    song2.setVolume(1)
    song2.rate(1)
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        scoreleftWrist=results[0].pose.keypoints[9].score;
    console.log("scoreleftWrist="+scoreleftWrist)
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("leftWristX="+leftwristX+"leftWristY="+leftWristY)
        console.log("rightWristX="+rightwristX+"rightWristY="+rightWristY)
    }
    }
    