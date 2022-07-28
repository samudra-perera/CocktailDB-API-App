const drinkSearch = document.querySelector('.drinkSearch')
const searchButton = document.querySelector('.searchButton')
const drinkName = document.querySelector('.drinkName')
const drinkImage = document.querySelector('.drinkImage')
const ingredients = document.querySelector('.ingredients')
const instructions = document.querySelector('.instructions')


function fetchDrink () {
        let drink = drinkSearch.value
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            displayData(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }


function displayData(data) {
    drinkName.innerText = data.drinks[0].strDrink
    drinkImage.src = data.drinks[0].strDrinkThumb
    //iterates through the max # of elements in the object and returns on valid strings
    for(let i = 1; i < 15; i++) {
        if(data.drinks[0][`strIngredient${i}`] == null) {
            break
        }
        document.getElementById(`${i}`).innerText = data.drinks[0][`strIngredient${i}`]
    }
    instructions.innerText = data.drinks[0].strInstructions
}

searchButton.addEventListener('click', function() {
    fetchDrink()
})

function createDOMElements() {
    for(let i = 0; i < data.length; i++) {
        
    }
}

// Create an for Loop that appends DOM elements to each div within Carousel
