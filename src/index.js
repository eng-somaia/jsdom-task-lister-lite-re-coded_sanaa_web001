document.addEventListener("DOMContentLoaded", () => {
  let submitButton= document.querySelectorAll("input")[1];
  submitButton.addEventListener("click", function(event){
     event.preventDefault();
     submitfunc();
     delListener();
  });
  
});

function submitfunc() {
  let newipList = document.getElementById("new-task-description");
  let newlistItem = document.createElement("li");
  newlistItem.innerHTML = newipList.value + " ";
  let checkB = document.createElement("button");
  checkB.innerHTML = 'x';
  let mainList = document.getElementById("tasks");
  newlistItem.appendChild(checkB);
  mainList.appendChild(newlistItem);
  newipList.value= "";
}
 
function delListener(){
  let deleteButton = document.querySelectorAll("#tasks li button");
  for(let i=0; i<deleteButton.length; i++){
     deleteButton[i].addEventListener("click", function() { 
     console.log(document.querySelectorAll("#tasks li")[i]);
     document.querySelectorAll("#tasks li")[i].remove();
    
     });
  } 
}
