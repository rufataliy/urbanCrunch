var point = 0;
let currentPosition = 0;
const section = document.querySelector("section")
const scrollHeight = section.offsetHeight
let scrollPostion = 0;
window.addEventListener("DOMMouseWheel",(e)=>{
  console.log(e.detail);
})
window.addEventListener("scroll",(e)=>{
  
  currentPosition++
  console.log(currentPosition);
  if (currentPosition === 10) {

    console.log("works");

    currentPosition = 0;
    window.scrollBy(0,scrollHeight)
  }

})
