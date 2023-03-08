//
// THIS CODE IS HIGHLY OPINIONATED
// YOU HAVE THE OPTION TO DELETE ALL OF
// THIS AND ACHEIVE THE SAME RESULTS
// WITH YOUR OWN FUNCTIONS
//

//
// APP VARIABLES AND DOM ELEMENTS
//

// Array of pokemons that are provided by the user
const pokemons = [];
// The ul for the list of pokemon
const pokeList = document.querySelector(".poke-items");
// The form where we intake pokemon
const pokeForm = document.querySelector(".add-pokemon");
// The form text element that has the name the user provided
const pokeName = document.querySelector("#pokemon-name");

//
// FUNCTIONS
//

// Handle the event when a user submits the form
// Step 1: Stop the browser's default form submission handling
// Step 2: Get the text from the form input field (hint - it's in a variable above)
// Step 3: Add what the user typed in the text field into the array
// Step 4: User our renderList() function to redraw our list
// Step 5: Reset the form to clear what the user put in the text field
function addPokemonItem(e) {
  // Stop browser default form submission
  e.preventDefault();

  // ADD CODE HERE TO ADD THE POKEMON NAME
  // TO OUR pokemons ARRAY

  // CALL THE RENDERLIST() FUNCTION TO REDRAW THE LIST

  // ALSO RESET THE FORM TO CLEAR THE TEXT FIELD
  console.log("User clicked on the form!");
}

// Draw the list of items
// Step 1: remove all of the children in the UL list
// Step 2: for each entry in the array add the array item to the list
function renderList(items, itemsList) {
  // Clear all of the entries in the list
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }

  console.log("Rendering the following data:", items);

  console.log("Rendering in element:", itemsList);

  // For each item in the list add a list item
  // ADD A FOR LOOP TO ADD EACH ITEM IN ITEMS TO THE
  // ITEMLIST
  // BONUS
  //  FOR THE LAST LIST ITEM ADD THE CLASS "new-item-annimate"
  //  AND SEE WHAT HAPPENS
}

//
// EVENT LISTENERS AND INITIALISION
//

// Add the submit form handler
pokeForm.addEventListener("submit", addPokemonItem);

// Draw the list
renderList(pokemons, pokeList);
