function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canavs= createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("blue")
}
function modelLoaded(){
    console.log("Posenet is initalized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}