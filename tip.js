function enterNum(){
  let inputVal = input.innerHTML
  let btnVal = this.innerHTML
  console.log(btnVal)
  if(btnVal == "Clear") {
    input.value = ""
  } else {
    input.value += btnVal;
  }
}
const output = document.querySelector(".output")
const tipBtn = document.querySelector(".tip")
let calcKeys = document.querySelectorAll(".calc-btn")
const input = document.getElementById("input")
for(x = 0; x < calcKeys.length;x++){
  calcKeys[x].addEventListener("click",enterNum)
}
tipBtn.addEventListener("click", function(){
  console.log(input.value * 0.125)
  let tip = (input.value * 0.125).toFixed(2)
  let tipMsg = `Tip $ ${tip} for $${input.value}`
  console.log(tipMsg)
  output.innerHTML = tipMsg
})
