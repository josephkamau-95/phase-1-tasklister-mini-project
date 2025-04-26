document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formInput = document.getElementById("new-task-description")
  const submitButton = document.querySelector("input[type = 'submit'][value = 'Create New Task']")
  submitButton.id = "submit-button"
  const taskList = document.querySelector("#tasks")
  

  submitButton.addEventListener("click", function(event){
      event.preventDefault()
      const value = formInput.value.trim()
      if (value !== ''){
        const liElement = document.createElement("li")
        liElement.textContent = value
        taskList.appendChild(liElement)
        formInput.value = ''
      }
  })
});


