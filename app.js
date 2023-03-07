// show nav 
const nav=document.querySelector(".nav")

document.querySelector("#displayNavBTN").addEventListener("click",()=>{
    nav.classList.add("transYZ")
})

document.querySelector("#hideNavBTN").addEventListener("click",()=>{
    nav.classList.remove("transYZ")
})



