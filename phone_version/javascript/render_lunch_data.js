window.onload = () => {
    renderLunchData()
}

let lunchData = [
    {
        discription: "A delicious, rich and tasty cold chicken salad! Whipped cream gives this a lift. Serve on a lettuce leaf or in sandwiches.",
        mealName: "Chicken Salad",
        imgs: "../images/lunch_pictures/chicken_salad.png"
    },
    {
        discription: "A fast and healthier way to serve Chimichangas than the traditional deep fried. ",
        mealName: "Chicken Chimichangas",
        imgs: "../images/lunch_pictures/chicken_chimichangas.png"
    },
    {
        discription: "Fettuccine Alfredo or fettuccine al burro 'fettuccine with butter' is an Italian pasta dish of fresh fettuccine tossed with butter and Parmesan cheese.",
        mealName: "Fettuchine Alfredo",
        imgs: "../images/lunch_pictures/algfredo.png"
    },
    {
        discription: "Cooking time includes the browning of the meatballs, although you can brown them in the oven on a cookie sheet and make the sauce at the same time, saving yourself a little time.",
        mealName: "Pineapple Meatballs",
        imgs: "../images/lunch_pictures/pineapple_meatballs.png"
    },
    {
        discription: "The spread on these meatball sandwiches is what really sets them apart from others. You can experiment and customize by using your favorite meatballs, sauces and fresh bread.",
        mealName: "Meatball Sandwiches",
        imgs: "../images/lunch_pictures/meatball_sandwhich.png"
    },
    {
        discription: "A Buffalo wing, in the cuisine of the United States, is an unbreaded chicken that is generally deep-fried then coated or dipped in a sauce consisting of a vinegar-based cayenne pepper hot sauce and melted butter prior to serving.",
        mealName: "Chicken Wings",
        imgs: "../images/lunch_pictures/chicken_wings.png"
    },
    {
        discription: "Vindaloo or vindalho is an Indian curry dish based on the Portuguese dish carne de vinha d'alhos which is popular in Goa, Vasai, the Konkan, Kerala and other parts of India",
        mealName: "Chicken Vindaloo",
        imgs: "../images/lunch_pictures/vindaloo.png"
    }
]

function  renderLunchData() {
    // Create card element
    const cardDeck = document.getElementById('carddeck');
    
    lunchData.forEach(menuOption => {
        const cardContainer = document.createElement("div");
        
        const content = `
        <div class="card mb-3">
            <img src="${menuOption.imgs}" class="card-img" alt="...">
            <div class="card-body">
                <h7 class="card-title"><h5><b>${menuOption.mealName}</b></h7>
                <p class="card-text">${menuOption.discription}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        `;
        
        console.log(content)
        cardContainer.innerHTML += content
        cardDeck.appendChild(cardContainer)
    })
}
