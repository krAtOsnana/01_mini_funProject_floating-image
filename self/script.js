var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20+"px"
    crsr.style.top = dets.y +20+"px"
})

var containers=document.querySelectorAll("#main .container")
console.log(containers);
containers.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att= elem.getAttribute("data-image")
        crsr.style.width="200px"
        crsr.style.height="200px"
        crsr.style.borderRadius="2%"
        crsr.style.backgroundColor="black"
        crsr.style.backgroundImage=`url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.width="20px"
        crsr.style.height="20px"
        crsr.style.borderRadius="50%"
        crsr.style.backgroundColor="#EDBFFF"

        crsr.style.backgroundImage=`none`

    })
})