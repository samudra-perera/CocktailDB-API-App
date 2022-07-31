const drinkSearch = document.querySelector('.drinkSearch')
const searchButton = document.querySelector('.searchButton')
const drinkName = document.querySelector('.drinkName')
const drinkImage = document.querySelector('.drinkImage')
const ingredients = document.querySelector('.ingredients')
const instructions = document.querySelector('.instructions')

const fetchDrink = async () => {
    let drink = drinkSearch.value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    displayData(data)
}

function displayData(data) {
    drinkName.innerText = data.drinks[0].strDrink
    drinkImage.src = data.drinks[0].strDrinkThumb
    //iterates through the max # of elements in the object and returns on valid strings
    for(let i = 1; i < 15; i++) {
        if(data.drinks[0][`strIngredient${i}`] == null) {
            break
        } 
        let item = document.createElement('li')
        item.id = '1'
        ingredients.appendChild(item)
        if (data.drinks[0][`strMeasure${i}`] == null) {
            item.innerText = data.drinks[0][`strIngredient${i}`]
        } else {
            item.innerText = data.drinks[0][`strMeasure${i}`] + ' ' + data.drinks[0][`strIngredient${i}`]
        }
    }
    instructions.innerText = data.drinks[0].strInstructions
}

searchButton.addEventListener('click', function() {
    fetchDrink()
})

function createDrinkCard() {
    const cocktailInnerHTML = `
    <div class="carousel container">
        <h2 class="drinkName">Drink</h2>
        <img src=" " alt="Drink Image" class="drinkImage">
        <ul class="ingredients">
            <li id="1">placeholder</li>
            <li id="2">placeholder</li>
            <li id="3">placeholder</li>
            <li id="4">placeholder</li>
        </ul>
        <p class="instructions">Placeholder Instructions</p>
    </div>
    `
}

// Create an for Loop that appends DOM elements to each div within Carousel
