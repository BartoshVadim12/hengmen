
const words = ["яблоко", "машина", "реструктуризатор", "стол", "стул", "книга", "ручка", "монитор", "мышка", "конец"]

 function chooseWordArr() {
    return words[Math.floor(Math.random()*10)]
    
}
const wordRandom = chooseWordArr()
 console.log(wordRandom)

// =========================================

function changeImg() {
    document.getElementById("imger").src="/img/2.png"
}

// ===================================

// количество букв в слове


function emphasizeLetter (){
    chooseWordArr(words).map(item )
        document.getElementById("border").style.border = "1px solid black"
        document.getElementById("border").style.margin = "0px 5px 20px"
        document.getElementById("border").style.width = "50px"
    
}
emphasizeLetter ()