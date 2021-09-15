noseX=0; noseY=0; difference = 0; rightWristX = 0; leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Initialized');

}

function gotPoses (resuts)
{
    if(resuts.length > 0)
    {
        console.log(results);
        noseX = resuts[0].pose.nose.x;
        noseY = resuts[0].pose.nose.y;
        console.log("noseX =" + noseX +"noseY =" + noseY);

        leftWristX = resuts[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX = " + leftWristX + "rightWristX ="+ rightWristX + "difference =" + difference);

    }
}