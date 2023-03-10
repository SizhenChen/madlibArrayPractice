let nounArray = ["Xiao Ming","cat","lipstick","hamburger","painter","AI"]
let nounNum = 0
let nounSpan = document.getElementById("nounSpan")
let nounNum1 = 0
let nounSpan1 = document.getElementById("nounSpan1")
let nounNum2 = 5
let nounSpan2 = document.getElementById("nounSpan2")

let verbArray = ["shits","kicks","hugs","screams at","winks at", "moons"]
let verbNum = 0
let verbSpan = document.getElementById("verbSpan")

let adjArray = ["appalled","euphoric","perplexed","depressed","frantic", "intrigued", "speechless"]
let adjNum = 0
let adjSpan = document.getElementById("adjSpan")

let eventArray =["the sun exploded"]
let eventSpan = document.getElementById("eventSpan")


nounSpan.addEventListener("click", ()=>{
    nounSpan.innerHTML = nounArray[nounNum]
    nounNum++
    if(nounNum > nounArray.length - 1){
       nounNum = 0
    }
})

verbSpan.addEventListener("click", ()=>{
    verbSpan.innerHTML = verbArray[verbNum]
    verbNum++
    if(verbNum > verbArray.length - 1){
       verbNum = 0
    }
})

nounSpan1.addEventListener("click", ()=>{
    nounSpan1.innerHTML = nounArray[nounNum1]
    nounNum1++
    if(nounNum1 > nounArray.length - 1){
       nounNum1 = 0
    }
})

adjSpan.addEventListener("click", ()=>{
    adjSpan.innerHTML = adjArray[adjNum]
    adjNum++
    if(adjNum > adjArray.length - 1){
       adjNum = 0
    }
})

nounSpan2.addEventListener("click", ()=>{
    nounSpan2.innerHTML = nounArray[nounNum2]
    nounNum2++
    if(nounNum2 > nounArray.length - 1){
       nounNum2 = 0
    }
})

eventSpan.addEventListener("click", ()=>{
    eventSpan.innerHTML = eventArray[0]
})