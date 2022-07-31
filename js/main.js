const drinkSearch = document.querySelector('.drinkSearch')
const searchButton = document.querySelector('.searchButton')

const fetchDrink = async () => {
    let drink = drinkSearch.value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    const res = await fetch(url)
    const data = await res.json()
    displayData2(data)
}

searchButton.addEventListener('click', function() {
    fetchDrink()
})

function createDrinkCard(i) {
    const cocktailEle = document.createElement('div')
    cocktailEle.classList.add('cocktail')
    const cocktailInnerHTML = `
        <div class="carousel container">
            <h2 class="drinkName${i}">Drink</h2>
            <img src=" " alt="Drink Image" id = "drinkImage" class="drinkImage${i}">
            <ul class="ingredients${i}">
            </ul>
            <p class="instructions${i}">Placeholder Instructions</p>
        </div>
        `
    cocktailEle.innerHTML = cocktailInnerHTML
    document.getElementById('drinksContainer').appendChild(cocktailEle)
}

// This is the function that will display the data to the dynamically created HTML elements from CreateDrinksCard()
function displayData2(data) {
    //iterates through the drinks array and creates HTML elements
    for(let j = 0; j < data.drinks.length; j++) {
        createDrinkCard(j)
        let cocktail = data.drinks[j]
        let drinkName = document.querySelector(`.drinkName${j}`)
        let drinkImage = document.querySelector(`.drinkImage${j}`)
        let instructions = document.querySelector(`.instructions${j}`)
        let ingredients = document.querySelector(`.ingredients${j}`)
        drinkName.innerText = cocktail.strDrink
        drinkImage.src = cocktail.strDrinkThumb
        instructions.innerText = cocktail.strInstructions

        for(let i = 1; i < 15; i++) {
            if(data.drinks[j][`strIngredient${i}`] == null) {
                break
            } 
            let item = document.createElement('li')
            item.id = '1'
            ingredients.appendChild(item)
            if (data.drinks[j][`strMeasure${i}`] == null) {
                item.innerText = data.drinks[j][`strIngredient${i}`]
            } else {
                item.innerText = data.drinks[j][`strMeasure${i}`] + ' ' + data.drinks[j][`strIngredient${i}`]
            }
        }
    }
}