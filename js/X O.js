let startBtn = document.querySelector(".open .content .content:last-of-type button")
let container = document.querySelector(".container")
let open = document.querySelector(".open")
let backBtn = document.querySelector(".back")
let resetBtn = document.querySelector(".reset")
let inputOne = document.querySelector(".player-1")
let inputTwo = document.querySelector(".player-2")
let warning = document.querySelectorAll(".open .content .child h3")
let playerOne = document.querySelector(".user h2:first-child")
let playerTwo = document.querySelector(".user h2:last-child")



let parent = document.querySelector(".parent")
let divInParent = document.querySelectorAll(".parent .son")

let divOne = document.querySelector(".parent .one")
let divTwo = document.querySelector(".parent .two")
let divThree = document.querySelector(".parent .three")
let divFour = document.querySelector(".parent .four")
let divFive = document.querySelector(".parent .five")
let divSix = document.querySelector(".parent .six")
let divSeven = document.querySelector(".parent .seven")
let divEight = document.querySelector(".parent .eight")
let divNine = document.querySelector(".parent .nine")
let cover = document.querySelector(".cover")

let areaX = [];
let areaO = [];
let placeX = [];
let placeO = [];
let i = 2;

let probability = [ /123/, /1\d?5\d?9/, /1\d?4\d?7/, /2\d*5\d?8/, /\d?4\d?5\d?6/ , /\d?789/, /3\d?5\d?7/, /3\d?6\d?9/];
// let secondProbality = [123, 159, 147, 258, 465, ]

// for (let k= 0 ; k < probability.length ; k ++) {
//     console.log(probability[k].test(3569))
// }



parent.addEventListener("click" , function (e) {
    if (e.target.classList.contains("area")) {
        if (i % 2 === 0) {
            creatElementX(e.target)
            e.target.classList.remove("area")
            i++;
        }else {
            creatElementO(e.target) 
            e.target.classList.remove("area")
            i++;
        }
    }
    console.log(i)
})

function creatElementX(e) {
    let eleX = document.createElement("div")
    eleX.innerHTML = "X"
    eleX.id = e.id
    e.appendChild(eleX)
    placeX.push(e.id)
    // console.log(placeX)
    checkX()
}
function creatElementO(e) {
    let eleO = document.createElement("div")
    eleO.innerHTML = "O"
    eleO.id = e.id
    e.appendChild(eleO)
    placeO.push(e.id)
    // console.log(placeO)
    checkO()
}


function checkX() {
    placeX.sort()
    console.log(placeX)
    probability.forEach(function (e) {
        if (e.test(placeX.join(""))) {
                parent.classList.toggle("active")
                cover.classList.add("active")
                cover.innerHTML = `${inputOne.value} is winner`
        }
    })
}
function checkO() {
    placeO.sort()
    probability.forEach(function (e) {
        if (e.test(placeO.join(""))) {
                parent.classList.toggle("active")
                cover.classList.add("active")
                cover.innerHTML = `${inputTwo.value} is winner`
        }
    })
}

//#############################      opening        #######################

startBtn.onclick = function () {
    if (inputOne.value !== "" &&  inputOne.value !== "") {
        container.classList.toggle("active")
        open.classList.toggle("active")
        backBtn.classList.toggle("active")
        playerOne.innerHTML = inputOne.value
        playerTwo.innerHTML = inputTwo.value
    }else {
        let warnTime = setInterval(function () {
            warning.forEach((e) => e.classList.toggle("active"))
        }, 250)
        inputOne.onfocus = function () {
            warning.forEach((e) => e.classList.remove("active"))
            clearInterval(warnTime)
        }
        inputTwo.onfocus = function () {
            warning.forEach((e) => e.classList.remove("active"))
            clearInterval(warnTime)
        }
    }
}
backBtn.onclick = function () {
    container.classList.toggle("active")
    open.classList.toggle("active")
    backBtn.classList.toggle("active")
}




resetBtn.onclick = function (){
    cover.classList.remove("active")
    divInParent.forEach(function (e) {
        e.innerHTML = ""
        e.classList.add("area")
    })
    parent.classList.remove("active")
    placeX = []
    placeO = []
    areaO = []
    areaX = []
    i =2;
}






// let array = [1, 4, 2, 6]  // 

// let check1 = ["1", "4"]
// let check2 = 1246
// let check3 = 142


// let number = /\d\d?\d\d/ig;


// console.log(array.join(" ").includes(check1.join(" ")))
// // console.log(array.join("").includes(check2))
// // console.log(array.join("").includes(check3))

// // array.sort()

// // console.log(array.join("").includes(check1))
// // console.log(array.join("").includes(check2))
// // console.log(array.join("").includes(check3))
