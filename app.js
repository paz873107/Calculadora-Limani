//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click",(calculate));
});

function calculate(){
    console.log("working")
}