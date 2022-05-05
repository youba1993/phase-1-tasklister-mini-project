document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector('form').addEventListener('submit', function (e){
       e.preventDefault();
       const inputedText = document.getElementById("new-task-description").value;// copie the input of the User
       const outputElement = document.createElement("li");                       // create a list element                      
       outputElement.textContent = inputedText; 
       document.querySelector('#tasks').appendChild(outputElement);              // output the result 

      })

      function deleteElement(){
        document.querySelector('ul').addEventListener("click", function(e){
          e.preventDefault();
          e.target.remove()
        })
      }
      deleteElement()// delete element by clicking on it



  });
 
  

