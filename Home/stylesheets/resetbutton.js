//   <!-- 
//   Final Project
//   Author: Thomas B. Cholak
//   Date: 10/18/2019
//   
//   Filename: resetbutton.js
//   -->
var frm_elements = oForm.elements;

for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text") {
    elements[ii].value = "";
  }
}

  