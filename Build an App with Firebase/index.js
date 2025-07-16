const inputFieldElement = document.getElementById("inputField")
const addButtonElement = document.getElementById("addButton")

addButtonElement.AddEventListener("click", function() {
  let inputElementValue = inputFieldElement.value

  console.log(inputElementValue)
})
