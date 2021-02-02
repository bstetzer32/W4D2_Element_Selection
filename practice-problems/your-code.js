// 1. AFTER THE DOM HAS LOADED DO THE FOLLOWING TASKS:
document.addEventListener("DOMContentLoaded", event => {




// 2. Replace the inner text of the h3 tag with className 'your-name'
//    with your name instead of 'YOUR NAME HERE'

let nameTag = document.querySelector(".your-name");
nameTag.innerText = "Benjamin Beckles"; 
console.log(nameTag);

// 3. Replace the inner text of the h3 tag with className 'current-date'
//    with the current date instead of 'CURRENT DATE HERE'




// 4. Grab the ul with the id of 'todo-list' and replace it's innerHTML
//    with three li tags, each with its inner text set to some
//    todo list item (i.e grocery shop) 
//
//    should look similar to html below:
// 
// 	  <ul id="todo-list">
// 		  <li>grocery shop</li>
// 		  <li>bake cookies</li>
// 		  <li>buy a pony</li>
//   </ul>

});