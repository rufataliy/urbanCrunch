const btn = document.querySelectorAll(".btn-slide")
const slide = document.querySelector(".slide")
const slideItem = document.querySelector(".slide-item")
let net =0;
const slideItems = document.querySelectorAll(".slide-item")
slideItems.forEach((a)=>net += a.offsetWidth)

const slideItemWidth = slideItem.offsetWidth
let slideSize = 0

btn.forEach((a)=>a.addEventListener("click",function slideIt (e){
  if (a.getAttribute("data") === "right" && slideSize<=net/(slideItems.length-2)) {

    slideSize += slideItemWidth
    console.log("left", slideSize);
  }else if (a.getAttribute("data") === "left" && slideSize>0) {

    slideSize -= slideItemWidth
    console.log("right", slideSize);

  }
  e.preventDefault;
  console.log(e.target.dataset.slide);
  document.getElementById(e.target.dataset.slide).style.transform = `translateX(-${slideSize}px)`
}))


// btn2.addEventListener("click",slideIt2)
//
// function slideIt2 (e){
//   slideSize -= slideItemWidth
//   e.preventDefault;
//   console.log(slideItemWidth);
//   slide.style.transform = `translateX(-${slideSize}px)`
// }
