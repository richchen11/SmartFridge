window.onload = () => {
    renderDinnerData()
}

let dinnerData = [
    {
        discription: "When I have leftover steak, it’s time to make cilantro tacos. Set out bowls of toppings like lettuce, tomatoes, sour cream, avocado and salsa.",
        mealName: "Beef Tacos",
        imgs: "../images/dinner_pictures/beef_tacos.png"
    },
    {
        discription: "This super creamy mac 'n' cheese is so simple it seems almost too easy! Kids really go for the rich cheese flavor, but I've never met an adult who didn't love it too.",
        mealName: "Mac & Cheese",
        imgs: "../images/dinner_pictures/mac_and_cheese.png"
    },
    {
        discription: "This grilled shrimp is one of my go-to recipes when I stare at the freezer and draw a blank.",
        mealName: "Lemon-Dill Shrimp",
        imgs: "../images/dinner_pictures/lemon_dill_shrimp.png"
    },
    {
        discription: "It's absolutely heavenly and a great option for company! ",
        mealName: "Tortellini Carbonara",
        imgs: "../images//dinner_pictures/tortellini_carbonara.jpg"
    },
    {
        discription: "These crunchy chicken tenders are a little sweet, a little tangy and a whole lot of fun. ",
        mealName: "Crispy BBQ Chip Tenders",
        imgs: "../images/dinner_pictures/bbq_chip_tenders.png"
    },
    {
        discription: "It sizzles with the flavors of brown sugar, ginger and soy sauce. Huli means \"turn\" in Hawaiian.",
        mealName: "Huli Huli Chicken",
        imgs: "../images//dinner_pictures/huli_huli_chicken.png"
    },
    {
        discription: "Shrimp Scampi",
        mealName: "This shrimp scampi recipe looks elegant enough to serve to company, but it’s easy to prepare.",
        imgs: "../images//dinner_pictures/shrimp_scampi.png"
    }
]

function renderDinnerData() {
    // Create card element
    const cardDeck = document.getElementById('carddeck');
    
    dinnerData.forEach(menuOption => {
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