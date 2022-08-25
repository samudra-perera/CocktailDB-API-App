//variables to store the input and search
const drinkSearch = document.querySelector('.drinkSearch')
const searchButton = document.querySelector('.searchButton')
const buttons = document.querySelectorAll("[data-carousel-button]")

const fetchDrink = async () => {
    let drink = drinkSearch.value
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
        const res = await fetch(url)
        const data = await res.json()
        displayData2(data)
    } catch {

    }
}

searchButton.addEventListener('click', function() {
    fetchDrink()
})

//This function creates the cards using an HTML template that the API data will be stored in
function createDrinkCard(i) {
    const cocktailEle = document.createElement('div')
    cocktailEle.classList.add('cocktail')
    cocktailEle.classList.add('slide')
    const cocktailInnerHTML = `
        <div class="carouselContainer">
            <h2 class="drinkName${i}" id="drinkNames">Drink</h2>
            <img src=" " alt="Drink Image" id = "drinkImage" class="drinkImage${i}">
            <h3 id="ingredientsTitle">Ingredients</h3>
            <ul class="ingredients${i}" id="ingredients"></ul>
            <h3 id="instructionsTitle">Instructions</h3>
            <p class="instructions${i}" id=""instructions>Placeholder Instructions</p>
        </div>
        `
    cocktailEle.innerHTML = cocktailInnerHTML
    document.getElementById('drinksContainer').appendChild(cocktailEle)
}

// This is the function that will display the data to the dynamically created HTML elements from CreateDrinksCard()
function displayData2(data) {
    //Checks if there is already cocktail cards completed (for a prev search) if there is deletes all the nodes 
    if(document.querySelectorAll('.cocktail.slide').length) {0
        //creates node list of all divs then deletes using forEach
        let del = document.querySelectorAll('.cocktail.slide')
        del.forEach(elem => elem.remove())
    }
    //iterates through the drinks array and creates HTML elements
    for(let j = 0; j < data.drinks.length; j++) {
        // To ensure that the first element is displayed without hardcoding data-active = true into the cocktailInnerHtml
        // Passes in j to createDrinkCard and which produces the template for the cocktail card for every element in the array
        createDrinkCard(j)
        if(j == 0) {
            document.querySelector('.slide').dataset.active = true
        }

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


// Creating the carousel -- done using the help of youtube
buttons.forEach(button => {
    //adds event listener to each button
    button.addEventListener("click", () => {
        //if button data = 'next' offset = 1 else offset = -1
       const offset = button.dataset.carouselButton === 'next' ? 1 : -1; 
       const slides = button
       .closest("[data-carousel]")
       .querySelector("[data-slides]")
       console.log(slides)
       const activeSlide = slides.querySelector("[data-active]")
       console.log(activeSlide)
       let newIndex = [...slides.children].indexOf(activeSlide) + offset
       console.log(newIndex)
       if(newIndex < 0) newIndex = slides.children.length -1
       if(newIndex >= slides.children.length) newIndex = 0

       slides.children[newIndex].dataset.active = true
       delete activeSlide.dataset.active
    })
})