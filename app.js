

//-------------------------------------------setTimeout-------------------------------------------------
// const sayHitesh= function () {
//     console.log("hitesh");    
// }
// const changeText = function(){
//     document.querySelector('h1').innerHTML="best js playlist"
// }
// const changeMe=setTimeout(changeText,4000)
// // ============================
// document.querySelector('#stop')
// .addEventListener('click',function () {
//     clearTimeout(changeMe)
//     console.log("STOPPED");

// })


//-------------------------------------------setInterval-------------------------------------------------

const sayDate= function (str) {
    console.log(str,Date.now());
    
}
const intervalId=setInterval(sayDate,1000,"hi")
clearInterval(intervalId)