noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
wrist_difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(625,800);
    canvas=createCanvas(700,600);
    canvas.position(700,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background(255,189,34);
    square(noseX, noseY, wrist_difference);
    fill('#800080');
    stroke('#39FF14');
    strokeWeight(13);
}

function modelLoaded()
{
    console.log( "PoseNet Model Loaded !!!");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("Nose X is = " + noseX);
        console.log("Nose Y is = " + noseY);
        leftwristX= results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        console.log("Left Wrist X is =" + leftwristX);
        console.log("Right Wrist X is = " + rightwristX);
        wrist_difference= floor(leftwristX - rightwristX);
        console.log("Wrist Difference is = " + wrist_difference);

    } 
}
