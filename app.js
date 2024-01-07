console.log("animate");


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});


const hiddenElemets = document.querySelectorAll(".anime");

hiddenElemets.forEach((el)=> observer.observe(el));
const textAnime = document.querySelectorAll(".heading");
textAnime.forEach((el)=>observer.observe(el));
    


//          CURSOR
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX +"px; top:" + e.clientY +"px";
})

let btn=  document.querySelector(".btn-same");
btn.addEventListener("mouseover", function(){
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor.style.backgroundColor = "black";
    cursor.style.opacity = "0.5";

    cursor2.style.opacity = "0";
})