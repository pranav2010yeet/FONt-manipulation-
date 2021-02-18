nosex=0
nosey=0
lefthandx=0
righthandx=0
difference=0
score=0
function setup(){
    video=createCapture(VIDEO)
video.size(400,400)
video.position(100,200)

canvas=createCanvas(400,400)
canvas.position(700,200)

posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}

function gotposes(results){
 if (results.length>0) {
     console.log(results)
     nosex=results[0].pose.nose.x
     nosey=results[0].pose.nose.y
     lefthandx=results[0].pose.leftWrist.x
     righthandx=results[0].pose.rightWrist.x
     difference=floor(lefthandx-righthandx)
score=results[0].pose.keypoints[0].score
 }
}


function modelloaded(){
    console.log("PRANAV MODEL LOADED!!!")
}

function draw(){
background("grey")
fill("yellow")
stroke("white")
if (score>0.2 ) {
    text("Pranav",nosex,nosey)
    textSize(difference)
        
}





}



