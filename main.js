
let Title = document.getElementById("Title"),
Error1 = document.getElementById("title_Error"),

Author = document.getElementById("Author"),
Error2 = document.getElementById("Author_Error"),

Btn = document.getElementById("btn"),

Price = document.getElementById("Price"),
Error3 = document.getElementById("Price_Error"),

form = document.getElementById("form"),
validation = document.getElementById("validation"),

date = document.getElementById("date"),
Error4 = document.getElementById("date_Error"),

language = document.getElementById("language"),
Error5 = document.getElementById ("language_Error"),


newDiv =  document.getElementById("newDiv"),

radio = document.querySelector(".radioBtn"),

checkedRadio = document.querySelector("input[name='textFont']:checked");

E404 = document.getElementsByClassName("E404"),

data = document.getElementById("tbody");

 function isvalid(){
    if(Title.value == ""   ){
        Error1.innerHTML = " Title is necessairy "
        return false
    }
     if (Title.value.length>30){
        Error1.innerHTML = " Title is too long "
        return false
    }
     if (Author.value == ""  ){
       Error2.innerHTML = "Please fill the Name "
       return false
     }
      if ( Author.value.length>30){
        Error2.innerHTML = "Author name is too long  "
        return false
     }
     if (isNaN(Price.value)  || Price.value == "" ){
         Error3.innerHTML = "The price must be filled with a number  "
         return false
     }
     if (Price.value<=0){
        Error3.innerHTML = "Your Price is negative  "
        return false
     }
     if (date.value == ""){
         Error4.innerHTML = "Please Enter the  Date "
         return false
     }
     if(language.value.length == 0){
         Error5.innerHTML = "languege field must be filled "
         return false
     }
     return true

}



form.addEventListener("submit",(e)=>{
    e.preventDefault()
})

Btn.addEventListener("click",function check(e){
    e.preventDefault()

    let valid = isvalid();
    console.log(valid)
    if(!valid) return 
    
    checkedRadio = document.querySelector('input[name=textFont]:checked');
 
         Error1.style.color="green"
         Error1.innerHTML ="Good"
         Error2.style.color="green"
         Error2.innerHTML="Good"
         Error3.style.color="green"
         Error3.innerHTML="Good"
         Error4.style.color = "green"
         Error4.innerHTML = "Good"

        let data = document.getElementById("tbody"),
         newRow = data.insertRow(),
        Cell1 = newRow.insertCell(0),
        Cell2 = newRow.insertCell(1),
        Cell3 = newRow.insertCell(2),
        Cell4 = newRow.insertCell(3),
        Cell5 = newRow.insertCell(4),
        Cell6 = newRow.insertCell(5),
        Cell7 = newRow.insertCell(6) ;


         Cell1.innerHTML = Title.value
         Cell2.innerHTML = Author.value
         Cell3.innerHTML = Price.value
         Cell4.innerHTML = date.value
         Cell5.innerHTML = language.value
         Cell6.innerHTML= checkedRadio.value
         
         const deleteBtn = document.createElement("button")
         deleteBtn.innerText = "Delete"
         const editBtn = document.createElement("button")
         editBtn.innerText = "Edit"

         Cell7.append(deleteBtn, editBtn)

         deleteBtn.addEventListener("click",()=>{
             let isAgree = confirm('Do you really want to delete ?')
             if(isAgree){
                newRow.remove();

                   // empty all inputs
                   Title.value = ""
                   Author.value = ""
                   Price.value= ""
                   date.value = ""
                   language.value =""
                   checkedRadio.checked= false

               // validation messages will disappear 
                   Error1.innerHTML =""
                   Error2.innerHTML=""
                   Error3.innerHTML=""
                   Error4.innerHTML = ""

             }
         })
         
         editBtn.addEventListener("click",(e)=>{
             e.preventDefault()
            Title.value = Cell1.textContent
            Author.value= Cell2.textContent        
            Price.value = Cell3.textContent
            date.value = Cell4.textContent
            language.value = Cell5.textContent
            checkedRadio = document.querySelector('input[value="'+Cell6.textContent+'"]')
            checkedRadio.checked = true;

            // create edit button in newDiv, it appears when I clicke the edit button in the cell 
            newDiv.innerHTML = "";
            const updateBtn = document.createElement('button')  
            updateBtn.style.height = "30px" 
            updateBtn.style.width ="100px"         
            updateBtn.innerText = "Edit"
            newDiv.append(updateBtn)

            updateBtn.addEventListener('click',()=>{
                let valid = isvalid();
                console.log(valid)
                 if(!valid) return 
             // take values from inputs and put them in cells 
                Cell1.innerHTML = Title.value;
                Cell2.innerHTML = Author.value;
                Cell3.innerHTML = Price.value;
                Cell4.innerHTML = date.value;
                Cell5.innerHTML = language.value;
                checkedRadio = document.querySelector("input[name='textFont']:checked")
                Cell6.innerHTML = checkedRadio.value;
                
                // empty all inputs
                Title.value = ""
                Author.value = ""
                Price.value= ""
                date.value = ""
                language.value =""
                checkedRadio.checked= false
            // validation message will disappear 
                Error1.innerHTML =""
                Error2.innerHTML=""
                Error3.innerHTML=""
                Error4.innerHTML = ""

                updateBtn.remove();
                
            })
         })
         
        
    });

 form.addEventListener("focus",function(event){
    event.target.style.background="lightSeaGreen ";
 },true);
 

 form.addEventListener("blur",function(event1){
     event1.target.style.background="";
 },true);






    





    

    

    


    
  
    
