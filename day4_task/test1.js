var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];  
var image=0;
var time;
var isSliding = false;

function changimage() {
   document.getElementById("slider").src= images[image];
   image++;
   if(image > images.length){
    image=0;
   }
   if(isSliding){
    time= setTimeout("changimage()" ,3000);
   }
   console.log("Done");
   
}
function start() {
    if(!isSliding){
        isSliding=true;
        changimage();
    }
}

window.onload=start();

function stopSliding(){
isSliding=false;
clearTimeout(time);
document.getElementById("slider").src = images[0];  
console.log("out");
}
