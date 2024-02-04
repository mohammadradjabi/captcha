let num1=Math.ceil(Math.random()*10)
let num2=Math.ceil(Math.random()*10)
let num1S=""
let num2S=""
let inp=document.querySelector("input")
let btn=document.querySelector("button")

if (num1==1) {
    num1S="One"
}else if (num1==2) {
    num1S="Two"
}else if (num1==3) {
    num1S="Three"
}else if (num1==4) {
    num1S="Four"
}else if (num1==5) {
    num1S="Five"
}else if (num1==6) {
    num1S="Six"
}else if (num1==7) {
    num1S="Seven"
}else if (num1==8) {
    num1S="Eight"
}else if (num1==9) {
    num1S="Nine"
}else if (num1==10) {
    num1S="Ten"
}
if (num2==1) {
    num2S="One"
}else if (num2==2) {
    num2S="Two"
}else if (num2==3) {
    num2S="Three"
}else if (num2==4) {
    num2S="Four"
}else if (num2==5) {
    num2S="Five"
}else if (num2==6) {
    num2S="Six"
}else if (num2==7) {
    num2S="Seven"
}else if (num2==8) {
    num2S="Eight"
}else if (num2==9) {
    num2S="Nine"
}else if (num2==10) {
    num2S="Ten"
}
let h31=document.querySelector("h3.num1").innerHTML=num1S
let h32=document.querySelector("h3.num2").innerHTML=num2S
btn.addEventListener("click", function(){
    answer=inp.value
    if ((num1+num2)==answer) {
        alert("congratulation! You're Not a Robot")
    } else{
        alert("Try again!")
        window.location.reload()
    }
})


