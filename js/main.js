//#region debut
let mainColor = localStorage.getItem('colorOption');
// change l'active of maincolor
if(mainColor !== null) {
    document.documentElement.style.setProperty('---maiCcolor',localStorage.getItem('colorOption'));

    document.querySelectorAll(".color-list li").forEach(ele => {
        ele.classList.remove('active')
        if(ele.dataset.color===mainColor){
            ele.classList.add('active')
        }
    })
    // })
}
let backgroundOption = true;
let backgroundInterval ;
// check if yes or no background 
let bgOp = localStorage.getItem('background-color');

if(bgOp=='true'){
    backgroundOption = true;

}else if(bgOp=='false'){
    backgroundOption =false;
}
// remove class active from all spans 
document.querySelectorAll(".random-background span").forEach(span =>{
    span.classList.remove('active');
})
if(bgOp==='true'){
    document.querySelector(".random-background .yes").classList.add('active');
}else{
    document.querySelector(".random-background .no").classList.add('active');
}
//#endregion debut

//#region "landign page"
    let landingPage = document.querySelector(".landing-page")
    let images = ['ista.jfif','ista2.jfif']

    function randomize(){
        if(backgroundOption==true){
            backgroundInterval = setInterval(()=>{
                let randNum = Math.floor(Math.floor(Math.random()*images.length))
                landingPage.style.backgroundImage = `url("images/${images[randNum]}")`
                
            },5000)
        }
    }
    randomize()
//#endregion "landign page"

//#region  open & close settings box

//open settings box with animition fa-spinch
var faCog = document.querySelector(".fa-cog");
let maincontent = document.querySelector('.main-content')
var boxSettings = document.querySelector(".settings-box"); 
faCog.onclick = ()=>{
    faCog.classList.toggle("fa-spin")
    boxSettings.classList.toggle('open');
    maincontent.classList.toggle('opened');
}
// close setti,gs box
        // const lan = document.querySelector(".landing-page");
        // lan.addEventListener("click", ()=>{
        //     faCog.classList.toggle("fa-spin")
        //     boxSettings.classList.toggle('open');
        // })
//#endregion  open

//#region switch color
const colors = document.querySelectorAll(".color-list li")
colors.forEach(li  => {
    li.addEventListener('click',(e) => {
        document.documentElement.style.setProperty("---maiCcolor",e.target.dataset.color);
        
        localStorage.setItem("colorOption",e.target.dataset.color)
        // access to parent element UL
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            
            element.classList.remove("active");
        })
        e.target.classList.add("active");
        
    })
})
//#endregion switch colors 

//#region active random background 
const yesNo = document.querySelectorAll(".random-background span");
yesNo.forEach(span =>{
    span.addEventListener('click', (clic) =>{
        clic.target.parentElement.querySelectorAll('.active').forEach(ele=>{
            ele.classList.remove("active");
        })
        clic.target.classList.add("active");
        if(clic.target.dataset.background =="yes" ){
            backgroundOption = true;
            randomize()
            localStorage.setItem("background-color",true)
        }
        else {
            backgroundOption = false;
            clearInterval(backgroundInterval)
            localStorage.setItem("background-color",false)
        }
    })
})
//#endregion

//#region animation of skills when we scrolled to here
let allskills = document.querySelectorAll('.skill-box .skill-progress span')
const ourSkills = document.querySelector(".skills")
const  checkVisibilite = function(ele){
        const getit = ele.getBoundingClientRect()
        if(getit.bottom<=window.innerHeight){
            allskills.forEach(skill =>{

                skill.style.width = skill.dataset.progress
            })
        }
    }

document.addEventListener('scroll',()=>{
            checkVisibilite(ourSkills)
    })
// window.onscroll = () =>{
//     //Skill Offset Top 
//     let skillOfsetTop = ourSkills.offsetTop;
//     // skill Offset Height
//     let skillOuterOffset=ourSkills.offsetHeight;  
//     // window height
//     let windowheight = this.innerHeight;
    
//     // Window ScrollTop
//     let windowscrolltop = window.pageYOffset;
//     if(windowscrolltop> (skillOfsetTop+skillOuterOffset-windowheight)){
//         // get the progress span 
//         let allskills = document.querySelectorAll('.skill-box .skill-progress span')
//         allskills.forEach(skill =>{
//             skill.style.width = skill.dataset.progress
//         })
//     }
// }
//#endregion

//#region start popup-box
let ourgallery =document.querySelectorAll(".gallery img")
ourgallery.forEach(img =>{
    img.addEventListener('click',(e)=>{
        let overly = document.createElement("div");
        overly.className="popup-overly";
        document.body.appendChild(overly)
        let popupBox = document.createElement('div');
        popupBox.className="popup-box"
        
        if(img.alt !== null){
            let h3 = document.createElement("h3")
            h3Text = document.createTextNode(img.alt)
            h3.appendChild(h3Text)
            h3.className='h3'
            popupBox.appendChild(h3)
        }

        //closse image 
        let x = document.createElement('span')
        let textX = document.createTextNode("X")
        x.appendChild(textX);
        x.className='close-popup'
        popupBox.appendChild(x);
        
        // add image to popup box
        let popupimage = document.createElement('img')
        popupimage.src=img.src;
        popupBox.appendChild(popupimage)
        document.body.appendChild(popupBox)
    })
})
document.addEventListener("click",function(close){
    let popupBox= document.querySelector(".popup-box");
    let popupOverly = document.querySelector(".popup-overly")
    if(close.target.className=='close-popup'){
        popupOverly.remove()
        popupBox.remove();
    }
})
//#endregion popup box 







