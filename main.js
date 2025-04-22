let list=[
    ['html',"20"],
    ['css',"30"],
    ['python',"15"],
    ['django',"20"],
    ['react',"25"],
    ['seo',"60"],
    ['f_commerce',"45"],
    ['blog_marketing',"70"]
]

let elementClass = document.getElementsByClassName("circle_number"); 
let circleClass = document.getElementsByClassName("skill_circle");

// for class in Css Sheet 
// circleClass.classList.add("circle_number")


for (i=0; i<list.length;i++){
    elementClass[i].textContent=list[i][1]+"%";

    dashCounter=(450-450*(list[i][1]/100)).toString();
    circleClass[i].style.strokeDasharray=450;
    circleClass[i].style.strokeDashoffset = (450 - 450 * (list[i][1] / 100)).toString();
}


