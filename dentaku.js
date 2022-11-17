 
 　function clickbutton(target) {
     let result = document.getElementById("result");
     let target_value = target.innerHTML;
     
     if (target_value == "AC") {
       result.innerHTML = "0";
       return;
     }
     
     if (target_value == "=") {
       result.innerHTML = eval(result.innerHTML)
       return;
     } 
     if (result.innerHTML == "0") {
         result.innerHTML = target_value;
         return;
         
     } if (result.innerHTML.slice(-1) == "+" || 
           result.innerHTML.slice(-1) == "-" || 
           result.innerHTML.slice(-1) == "*" || 
           result.innerHTML.slice(-1) == "." ||
           result.innerHTML.slice(-1) == "/") {
         result.innerHTML = target_value;
         return;
       } 
       
       result.innerHTML += target_value;
   }



// if (result.slice(-1) == "+" || result.slice(-1) == "-" || result.slice(-1) == "*" || result.slice(-1) == "/" ) {
//   result.innerHTML = result.innerHTML.replace(-2, -1);  
// }

