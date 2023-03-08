# Exercise 19 - Dom manipulation and Events

For this exercise, you are going to finish two functions. The `addPokemonItem` function and the `renderList` function.

The submit event handler is already wired up, and everytime the user hits submit the `addPokemonItem` function is called.

The `addPokemonItem` function should simply add what the user has typed in into our array of pokemons and once our array is updated the function would call `renderList` to redraw our list.

The `renderList` function is responsible for first clearing the children in the list and then redrawing all of the children. It might seem silly to redraw the whole list everytime, as opposed to just using `appendChild()` on the list item to add the new item. The reason we do this is that it simplifies our program logic, and because JavaScript runs so quickly we don't really notice the extra compute cycles being used.

Optionally, you can also ignore the existing functions and write your own code completely.

Detailed instructions for what JS to add are in your your `javascript-start.js` file. You will not have to update the `HTML` or `CSS` for this exercise.

## Desired outcome

![This is an image of the finished product](/images/desired-outcome.png)

## Steps

Since you now experts at cloning repos, one option open to you is that you could clone this `Exercise-18` repo and then work on it locally.

If you aren't as comfortable with cloning just yet, you can copy the HTML, CSS and JS files in the main project folder to your local machine and modify the `javascript-start.css` file until you acheive the desired outcome. In this exercise you must not modify the main HTML file or CSS file to acheive the desired outcome.

Please note that you should not be editing the CSS reset file.
