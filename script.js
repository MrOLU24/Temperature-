//first method using conditional/statement

const faharenheit = document.getElementById('fabtn')
const celsius = document.getElementById('celbtn')
celsius.onclick = function (){
    // console.log(deinput.value)
   if(faharenheit.value == 'faharenheit' && celsius.value == 'celsius'){
    let deinput = document.getElementById('temperature').value
    let DeAnswer = (deinput - 32) * 5/9
    console.log(`the faharenheit is ${DeAnswer}`)
    document.getElementById('temperature').value = DeAnswer.toFixed(2)
   }
}
faharenheit.onclick = ()=>{
    if(faharenheit.value == 'faharenheit' && celsius.value == 'celsius'){
        const inputs = document.getElementById('temperature').value
        let Answer = (inputs * 9/5) + 32
        document.getElementById('temperature').value = Answer.toFixed(2)
        console.log(`the celsius is ${Answer}`)
    }
}

// second method using fuction

// function convertTocelsius() {
//     let faharenheit = document.getElementById('fabtn')
//     let inputs = document.getElementById('temperature').value
//     let Answer = (inputs - 32) * 5/9
//     document.getElementById('temperature').value = Answer.toFixed(2)
// }
// function convertTofaharenheit(){
//     let celsius = document.getElementById('celbtn')
//     let Deinput = document.getElementById('temperature').value
//     let faAnswer = (Deinput * 9/5) + 32
//     document.getElementById('temperature').value = faAnswer.toFixed(2)
// }