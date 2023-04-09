
var prediction1="";
var prediction2="";


Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
   });
   
Webcam.attach("#camera");

function takesnap(){
    Webcam.snap(function(dataurl){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+dataurl+"'>";
        
    })
}


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/drb7AAY5D/model.json",modelReady);

function modelReady(){
    console.log("modelReady");
}