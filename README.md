# CocktailDB Carousel 
Find your favourite drinks and view them in a beautiful carousel cards with photos, ingredients, and instructions.

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, Vanilla JavaScript, and CocktailDB API

**Client**

The API fetch is completed via the search bar. The fetch is done using the async/await ES6 syntax. There are three main functions for this application, the ```createDrinkCard()```, ```displayData2()```, and ```fetchDrink()```. The createDrinkCard function creates an HTML template using template literals. The HTML template will be used to populate the drink data retrieved from the API call using the displayData2 function. There is a for loop that iterates through the data and creates a card for each element from the API call. Since the ingredients are numbered 1 to n, a second nested for loop is used to iterate through the ingredients and append the items to the cocktail card. The carousel was created using the help of a video by Web Dev Simplified and the code was repurposed and refactored to fit this application. 


## Further Optimizations

Going back through the codebase there are some optimizations I would make if I were to go back and re-make this application. I will outline them below. 

1. There is a slight offset of the cocktail card to the buttons and search bar that is quite visually unappealing

2. I would style the project differently, I was going for a bubblegum/candy feeling theme, and I am not feeling it too much 


## Future Consideration

If I were to redo this entire application knowing what I know now, I would make this using react and use the map function to create an array of drink card components and then render them to the screen

## Lessons Learned:

Some lessons I learned from this project were the importance of writing good comments. Secondly, I learned how to create a HTML template using template literals and then use a for loop to insert data into the elements and append the result to the DOM. 

## Recent Projects:
Take a look at some of my other portfolio projects:

**Just Journal:** https://github.com/samudra-perera/Journal-App-Full-Stack

**The Recipe Book** https://github.com/samudra-perera/The-Recipe-Book

**Portfolio Site** https://github.com/samudra-perera/React-Portfolio-Site/tree/main/portfolio-site
