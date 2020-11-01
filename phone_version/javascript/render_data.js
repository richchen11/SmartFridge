window.onload = () => {
    renderBreakfastData()
}

function renderBreakfastData(){
    let breakfastData = [
        {
            discription : "Regardless of how much of a hurry you are in, pancakes is one breakfast that you really do need to take slow. This makes them a fantastic way to slow down and get your day going on the right food, rather than rushing right from the start.",
            mealName : "Pancakes and Syrup",
            imgs: "../images/breakfast_pictures/pancakes.png"
        },
        {
            discription : "Breakfast burritos are a more savory option for breakfast, but they are also a very hearty option.",
            mealName : "Breakfast Burrito",
            imgs: "../images/breakfast_pictures/egg_benedict.png"
        },
        {
            discription : "French toast is another nice addition to breakfast. This one is often associated with lazy Sunday mornings, but it can work nice any day, especially as it is relatively fast to prepare",
            mealName : "French Toast",
            imgs: "../images/breakfast_pictures/french_toast.png"
        },
        {
            discription : "Bacon and eggs are two foods that most people associate with breakfast – and with good reason.",
            mealName : "Bacon and Eggs",
            imgs: "../images/breakfast_pictures/bacon_eggs.png"
        },
        {
            discription : "The term hash browns basically refers to potatoes being pan fried after being shredded, although there are some variations on the definition.",
            mealName : "Hashbrowns",
            imgs: "../images/breakfast_pictures/hash_brown.png"
        },
        {
            discription : "Crepes have a lot of similarities to pancakes, but they tend to be thinner and lighter.",
            mealName : "Crepes",
            imgs: "../images/breakfast_pictures/crepes.png"
        },
        {
            discription : "Regardless of the specific definition or recipe, griddlecakes are a very good breakfast option, Often you will end up with a hearty and sweet breakfast that offers a great way to get your day going.",
            mealName : "Griddlecakes",
            imgs: "../images/breakfast_pictures/griddlecakes.png"
        },
        {
            discription : "As fast food restaurants will testify, breakfast sandwiches (like this sausage and egg one) are a very popular way to start the day.",
            mealName : "Sausage and Egg Sandwich",
            imgs: "../images/breakfast_pictures/sausage_egg_sandwich.png"
        },
        {
            discription : "Omelets come in endless varieties, especially when you are considering the stuffed variety",
            mealName : "Omelets",
            imgs: "../images/breakfast_pictures/omelet.png"
        },
        {
            discription : "Millennials get made fun of constantly for enjoying avocado toast, but it's legit really good – and good for you!",
            mealName : "Avocado Toast",
            imgs: "../images/breakfast_pictures/avocado_toast.png"
        }
    ]

    // Create card element
    const cardDeck = document.getElementById('carddeck');
    
    breakfastData.forEach(menuOption => {
        const cardContainer = document.createElement("div");
        const content = `
        <div class="card mb-3">
            <img src="${menuOption.imgs}" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">${menuOption.mealName}</h5>
                <p class="card-text">${menuOption.mealName}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>`;
        console.log(content)
        cardContainer.innerHTML += content
        cardDeck.appendChild(cardContainer)
    })
   
}