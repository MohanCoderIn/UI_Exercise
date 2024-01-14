const noOfBoxes = 9;
const boxContainer = document.getElementById("boxContainer");

//Page on load
window.addEventListener("DOMContentLoaded", () => {

    //Populate the box container
    for (let i = 1; i <= noOfBoxes; i++) {
        boxContainer.appendChild(createBoxElement(i))
    }

})

//Sorting funtion
const sort = () => {
    let boxes = Array.from(boxContainer.children)
    boxContainer.innerHTML = ""
    boxes.sort((a, b) => a.textContent - b.textContent)
    boxes.forEach(ele => boxContainer.appendChild(ele))
}

//Shuffle function
const shuffle = () => {
    let boxes = Array.from(boxContainer.children)
    boxContainer.innerHTML = ""
    boxes.sort(() => Math.random() - 0.5)
    boxes.forEach(ele => boxContainer.appendChild(ele))
}

//Create box
const createBoxElement = (text) => {
    let element = document.createElement("div")
    element.textContent = text
    element.className = `box color-${text}`
    return element
}

