'use strict'






let searchBox = document.querySelector("#searchBox");
let goggleIcon = document.getElementById("goggleIcon");
 

// Adding A click Event


goggleIcon.onclick = function(e){

    searchBox.classList.toggle("active");
   // e.preventDefault();revisit
}



/* Revisit
goggleIcon.addEventListener('onlick', function(e){

  // e.preventDefault();

   searchBox.classList.toggle("active");
});
*/