let myPatterns = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
myPatterns.push(inputEl.value)
renderPatternLinks()
})

function renderPatternLinks() {
    let listPatterns = ""
    for (let i=0; i < myPatterns.length; i++) {
        listPatterns += "<li>" + myPatterns[i] + "</li>"
    }
    ulEl.innerHTML = listPatterns
}



