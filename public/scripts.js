function openForm() {
    document.getElementById("newForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("newForm").style.display = "none";
    document.getElementById("edit-product").style.display = "none";
  }

const editIcon = document.querySelectorAll('.edit-icon');
editIcon.forEach((button)=>{
  button.addEventListener("click",function(){document.getElementById("edit-product").style.display = "block";});

});

const deleteIcon = document.querySelectorAll('.delete-icon');
deleteIcon.forEach((button)=>{
  button.addEventListener("click",function(){document.getElementById("delete-product").style.display = "block";});
}
)