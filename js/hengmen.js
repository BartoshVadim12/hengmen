
const words = ["яблоко", "машина", "реструктуризатор", "стол", "стул", "книга", "ручка", "монитор", "мышка", "конец"]

function chooseWordArr() {
    console.log(words[Math.floor(Math.random()*10)])
}

chooseWordArr(words)

function changeImg() {
    document.getElementById("imger").src="/img/2.png"
}

