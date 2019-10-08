//(1)
// making loop over images length to get src from event target 
// and assigned it to new variable then making a lightbox-item background  = that variable 
// creating show selector in css with display property of flex 
// after every click to show up lightbox-container making its son -lightboxitem- background with any clicked 
// image then creating empty array to contain all images and getting it index 

//(2)
// right arrow function fired after crossing 
// the max lenght of images array to repeat 
// the array from zero 

//(3)
// left arrow function fired after crossing 
// the min lenght of images array to repeate 
// the array from max

//(4)
//connecting keybord to slider left arrow , right arrow and escape btn 


var imgs = document.getElementsByTagName("img");
var lightboxcontainer = document.querySelector(".lightbox-container");
var lightboxitem = document.querySelector(".lightbox-item");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");
var imgarr = [];
var currentindex = 0 ;

//(1)
for(var i=0 ; i<imgs.length ; i++)
{
    imgarr.push(imgs[i])
    imgs[i].addEventListener("click",function(e){
        lightboxcontainer.classList.add("show")
        var imgsrc = e.target.src
        lightboxitem.style.backgroundImage = "url("+imgsrc+")"
        currentindex = imgarr.indexOf(e.target)
    })
}


//(2)
next.addEventListener("click",function () { 
    nextMove()
 });


 function nextMove(){
    currentindex++
    if(currentindex == imgarr.length){
        currentindex = 0 ;
    }
    lightboxitem.style.backgroundImage = "url("+imgarr[currentindex].src+")"
 }

//(3)
 prev.addEventListener("click",function () { 
    prevMove()
 });

 function prevMove(){
    currentindex--
    if(currentindex < 0){
        currentindex = imgarr.length -1  ;
    }
    lightboxitem.style.backgroundImage = "url("+imgarr[currentindex].src+")"
}

 close.addEventListener("click", function () { 
     lightboxcontainer.classList.remove("show")
  })



//(4)
  document.addEventListener("keydown",function (e) { 
    if(e.keyCode == 27){
        lightboxcontainer.classList.remove("show")
    }
    else if(e.keyCode == 39){
        nextMove()
    }
    else if (e.keyCode == 37)
    {
        prevMove()
    }
   })

   //disable lightbox-Conatiner 

   lightboxcontainer.addEventListener("click", function (e) {

    if(e.target == lightboxcontainer){
        lightboxcontainer.classList.remove("show")
    }
     })