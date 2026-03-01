// ---------- YOUR WHATSAPP NUMBER ----------
const WHATSAPP_NUMBER = '265881006198'; // ✅ Your number

// ---------- IMAGE MAPPING ----------
const imageMap = {
    logos: {
        "KIPS": "images/kips.jpg",
        "GALITOS": "images/galitos.jpg",
        "KWITHU COFFEE DEN": "images/kwithu.jpg",
        "MEAT ZONE": "images/meat-zone.jpg",
        "BELLA'S FOOD COURT": "images/bellas-food.jpg",
        "CHICKEN LITOS": "images/chicken-litos.jpg"
    },
    foods: {
        // KIPS
        "Egg Roll": "images/egg-roll.jpg",
        "1 Fried Chicken & Chips": "images/fried-chicken-chips.jpg",
        "Chips & Sausage": "images/chips-sausage.jpg",
        "Chips & Eggs": "images/chips-eggs.jpg",
        "Chicken Piece": "images/chicken-piece.jpg",
        "Nsima & Chambo": "images/delicious-nsima-chambo.jpg",
        "1 Chicken Stew & Chips": "images/chicken-chips.jpg",
        "Beef Stew & Chips": "images/beef-stew-chicken.jpg",
        "Sausage": "images/sausages.jpg",
        "Beef Samosas": "images/meat-samosa.jpg",
        "Burger": "images/burger.jpg",
        "Delicious Burger": "images/beef-cheese-burger.jpg",
        "Large Pizza": "images/large-pizza.jpg",
        "Medium Pizza": "images/medium-pizza.jpg",
        "Small Pizza": "images/small-pizza.jpg",
        "Egg Sandwich": "images/egg-sandwich.jpg",
        "Club Sandwich": "images/club-sandwich.jpg",
        // GALITOS
        "Large Pizza": "images/large-pizza.jpg",
        "Medium Pizza": "images/medium-pizza.jpg",
        "Small Pizza": "images/small-pizza.jpg",
        "18 Grilled Chicken": "images/18-grilled-chicken.jpg",
        "12 Grilled Chicken": "images/12-grilled-chicken.jpg",
        "6 Grilled Chicken": "images/6-grilled-chicken.jpg",
        "Grilled Chicken": "images/grilled-chicken.jpg",
        "Chicken + Chips": "images/chips-chicken.jpg",
        "12 Chicken Pieces + Large Chips": "images/12-chicken-chips.jpg",
        "6 Chicken + Large Chips": "images/6-chicken-chips.jpg",
        "3 Pieces of Chicken + Chips": "images/chicken-chips.jpg",
        "Chicken + Rice": "images/chicken-rice.jpg",
        "Chicken + Chips + Coleslaw": "images/chips-chicken-coleslaw.jpg",
        "Plain Chips": "images/plain-chips.jpg",
        "Masala Chips": "images/masala-chips.jpg",
        "Chicken Burger": "images/chicken-burge-cheese.jpg",
        "Chicken Burger + Cheese": "images/chicken-burge-cheese.jpg",
        "Chicken Burger + Chips": "images/chicken-burger-chips.jpg",
        "Chicken Burger + Cheese + Chips": "images/chicken-burger-cheese-chips.jpg",
        "300ml Coke": "images/300ml-coke.jpg",
        "300ml Water": "images/300ml-water.jpg",
        "Chilli Beans": "images/chilli-beans.jpg",
        "Coleslaw": "images/coleslaw.jpg",
        "Spicy Rice": "images/spicy-rice.jpg",
        // BELLA'S
        "Chicken Burger": "images/chicken-burger.jpg",
        "Classic Burger": "images/classic-cheese-burger.jpg",
        "Chips & Chicken": "images/chicken-chips.jpg",
        "Chicken Wrap": "images/chicken-wrap.jpg",
        "Beef Wrap": "images/beef-wrap.jpg",
        "Chicken Pizza": "images/chicken-pizza.jpg",
        "Hawaiian Pizza": "images/hawaiian-pizza.jpg",
        "Veggie Pizza": "images/vegetarian-pizza.jpg",
        "Meat Lovers": "images/meat-lovers.jpg",
        "T-bone Steak(Chips/Rice)": "images/grilled-t-bone-chips.jpg",
        "Local Chicken(Nsima/Rice)": "images/local-food.jpg",
        "Chambo(Rice/Nsima)": "images/delicious-nsima-chambo.jpg",
        "Grilled Chicken(Chips/Rice)": "images/baked-chicken-chips.jpg",
        "Beef Stir Fry": "images/steak-stir-fry.jpg",
        "Samosas": "images/samosas.jpg",
        "Sausages": "images/sausages.jpg",
        "Chicken Wings": "images/chicken-wings.jpg",
        // KWITU
        "Kwitu Breakfast": "images/kwithu-breakfast.jpg",
        "Beef Burger": "images/beef-burger.jpg",
        "Cheese Beef Burger": "images/beef-cheese-burger.jpg",
        "Chicken Sandwich": "images/chicken-sandwich.jpg",
        "Steak Sandwich": "images/Steak-Sandwich.jpg",
        "Chicken Wrap": "images/chicken-wrap.jpg",
        "Beef Wrap": "images/beef-wrap.jpg",
        "T-bone steak": "images/t-bone-steak.jpg",
        "Small Pizza(BBQ Beef)": "images/beef-pizza.jpg",
        "Small Pizza(Chicken)": "images/chicken-pizza.jpg",
        "Small Pizza(Vegetarian)": "images/vegetarian-pizza.jpg",
        "Medium Pizza(BBQ Beef)": "images/mushroom-pizza.jpg",
        "Medium Pizza(Chicken)": "images/small-pizza.jpg",
        "Medium Pizza(Vegetarian)": "images/large-pizza.jpg",
        "Large Pizza(BBQ Beef)": "images/beef-pizza.jpg",
        "Large Pizza(Chicken)": "images/chicken-pizza.jpg",
        "Large Pizza(Vegetarian)": "images/vegetarian-pizza.jpg",
        "Sticky Wings": "images/sticky-wings.jpg",
        "Samosa": "images/samosas.jpg",
        "Doughnuts": "images/doughnuts.jpg",
        "Chocolate Doughnuts": "images/chocolates-doughnuts.jpg",
        "Eag & Toast": "images/egg-toast.jpg",
        //CHICKEN LITOS
        "Chicken + Rice": "images/chicken-rice.jpg",
        "Chicken + Chips + Coleslaw": "images/chips-chicken-coleslaw.jpg",
        "Plain Chips": "images/plain-chips.jpg",
        "Masala Chips": "images/masala-chips.jpg",
        "Chicken Burger": "images/chicken-burge-cheese.jpg",
        "Chicken Burger + Cheese": "images/chicken-burge-cheese.jpg",
        "Chicken Burger + Chips": "images/chicken-burger-chips.jpg",
        "Chicken Burger + Cheese + Chips": "images/chicken-burger-cheese-chips.jpg",
        "Large Pizza": "images/large-pizza.jpg",
        "Medium Pizza": "images/medium-pizza.jpg",
        // MEAT ZONE
        "Masala Chips": "images/masala-chips.jpg",
        "Chips & Eggs": "images/chips-egg.jpg",
        "Peri Peri Wings": "images/peri-peri-wings.jpg",
        "Chicken Wings": "images/chicken-wings.jpg",
        "Grilled Chicken": "images/grilled-chicken.jpg",
        "Char-grilled Pork ribs": "images/grilled-pork-ribs.jpg",
        "T-bone Steak": "images/t-bone-steak.jpg",
        "Nsima & Chambo": "images/nsima-chambo.jpg",
        "Stir-Fried Beef": "images/steak-stir-fry.jpg",
        "Chicken Sandwich": "images/chicken-sandwich.jpg",
        "Steak Sandwich": "images/Steak-Sandwich.jpg",
        "Chicken Wrap": "images/chicken-wrap.jpg",
        "Beef Wrap": "images/beef-wrap.jpg",
        "Eag & Toast": "images/egg-toast.jpg",
        "Club Sandwich": "images/club-sandwich.jpg"
    }
};

function getLogoSrc(name) {
    return imageMap.logos[name] || `https://via.placeholder.com/300x200?text=${encodeURIComponent(name)}`;
}
function getFoodSrc(name) {
    return imageMap.foods[name] || `https://via.placeholder.com/200x200?text=${encodeURIComponent(name)}`;
}

// ---------- RESTAURANT DATA ----------
const restaurants = [
    { 
        name: "KIPS", 
        food: [
            { name: "Egg Roll", price: 10300 },
            { name: "1 Fried Chicken & Chips", price: 9270 },
            { name: "Chips & Sausage", price: 11330 },
            { name: "Chips & Eggs", price: 7210 },
            { name: "Chicken Piece", price: 5665 },
            { name: "Nsima & Chambo", price: 20600 },
            { name: "1 Chicken Stew & Chips", price: 10300 },
            { name: "Beef Stew & Chips", price: 11330 },
            { name: "Sausage", price: 5665 },
            { name: "Beef Samosas", price: 1751 },
            { name: "Burger", price: 10300 },
            { name: "Delicious Burger", price: 13390 },
            { name: "Large Pizza", price: 38000 },
            { name: "Medium Pizza", price: 34000 },
            { name: "Small Pizza", price: 28000 },
            { name: "Egg Sandwich", price: 7210 },
            { name: "Club Sandwich", price: 16480 }
        ]
    },
    { 
        name: "GALITOS", 
        food: [
            { name: "Large Pizza", price: 38000 },
            { name: "Medium Pizza", price: 34000 },
            { name: "Small Pizza", price: 28000 },
            { name: "Chicken Piece", price: 5665 },
            { name: "18 Grilled Chicken", price: 72000 },
            { name: "12 Grilled Chicken", price: 56000 },
            { name: "6 Grilled Chicken", price: 31000 },
            { name: "Chicken + Chips", price: 20000 },
            { name: "12 Chicken Pieces + Large Chips", price: 61000 },
            { name: "6 Chicken + Large Chips", price: 37500 },
            { name: "3 Pieces of Chicken + Chips", price: 25000 },
            { name: "Chicken + Rice", price: 21000 },
            { name: "Chicken + Chips + Coleslaw", price: 24500 },
            { name: "Plain Chips", price: 9000 },
            { name: "Masala Chips", price: 11000 },
            { name: "Chicken Burger", price: 20000 },
            { name: "Chicken Burger + Cheese", price: 21500 },
            { name: "Chicken Burger + Chips", price: 25000 },
            { name: "Chicken Burger + Cheese + Chips", price: 27500 },
            { name: "300ml Coke", price: 2700 },
            { name: "300ml Water", price: 2300 },
            { name: "Chilli Beans", price: 8000 },
            { name: "Coleslaw", price: 7000 },
            { name: "Spicy Rice", price: 9000 }
        ]
    },
    { 
        name: "BELLA'S FOOD COURT", 
        food: [
            { name: "Chicken Burger", price: 13500 },
            { name: "Classic Burger", price: 11500 },
            { name: "Chips & Chicken", price: 15000 },
            { name: "Chicken Wrap", price: 16300 },
            { name: "Beef Wrap", price: 19000 },
            { name: "Chicken Pizza", price: 25000 },
            { name: "Hawaiian Pizza", price: 28500 },
            { name: "Veggie Pizza", price: 21500 },
            { name: "Meat Lovers", price: 29000 },
            { name: "T-bone Steak(Chips/Rice)", price: 14000 },
            { name: "Local Chicken(Nsima/Rice)", price: 12000 },
            { name: "Chambo(Rice/Nsima)", price: 19000 },
            { name: "Grilled Chicken(Chips/Rice)", price: 13500 },
            { name: "Beef Stir Fry", price: 14000 },
            { name: "Samosas", price: 9500 },
            { name: "Sausages", price: 3000 },
            { name: "Chicken Wings", price: 10000 }
        ]
    },
    { 
        name: "KWITHU COFFEE DEN", 
        food: [
            { name: "Kwitu Breakfast", price: 17000 },
            { name: "Beef Burger", price: 19000 },
            { name: "Cheese Beef Burger", price: 21000 },
            { name: "Chicken Burger", price: 15500 },
            { name: "Chicken Sandwich", price: 14000 },
            { name: "Steak Sandwich", price: 18000 },
            { name: "Chicken Wrap", price: 16300 },
            { name: "Beef Wrap", price: 19000 },
            { name: "Grilled Chicken", price: 17000 },
            { name: "T-bone steak", price: 25000 },
            { name: "Small Pizza(BBQ Beef)", price: 22000 },
            { name: "Small Pizza(Chicken)", price: 20000 },
            { name: "Small Pizza(Vegetarian)", price: 25000 },
            { name: "Medium Pizza(BBQ Beef)", price: 27000 },
            { name: "Medium Pizza(Chicken)", price: 25000 },
            { name: "Medium Pizza(Vegetarian)", price: 28000 },
            { name: "Large Pizza(BBQ Beef)", price: 32000 },
            { name: "Large Pizza(Chicken)", price: 32000 },
            { name: "Large Pizza(Vegetarian)", price: 30000 },
            { name: "Sticky Wings", price: 19000 },
            { name: "Samosa", price: 3000 },
            { name: "Sausage", price: 3000 },
            { name: "Doughnuts", price: 1800 },
            { name: "Chocolate Doughnuts", price: 3500 },
            { name: "Eag & Toast", price: 65000 },
            { name: "Club Sandwich", price: 12000 }
        ]
    },
    { name: "CHICKEN LITOS", food: [
        { name: "Chicken + Rice", price: 21000 },
        { name: "Chicken + Chips + Coleslaw", price: 24500 },
        { name: "Plain Chips", price: 9000 },
        { name: "Masala Chips", price: 11000 },
        { name: "Chicken Burger", price: 20000 },
        { name: "Chicken Burger + Cheese", price: 21500 },
        { name: "Chicken Burger + Chips", price: 25000 },
        { name: "Chicken Burger + Cheese + Chips", price: 27500 },
        { name: "Large Pizza", price: 38000 },
        { name: "Medium Pizza", price: 34000 },
    ]},
    { 
        name: "MEAT ZONE", 
        food: [
            { name: "Masala Chips", price: 6000 },
            { name: "Chips & Eggs", price: 9000 },
            { name: "Peri Peri Wings", price: 12000 },
            { name: "Chicken Wings", price: 17000 },
            { name: "Grilled Chicken", price: 20000 },
            { name: "Char-grilled Pork ribs", price: 18000 },
            { name: "T-bone Steak", price: 16000 },
            { name: "Nsima & Chambo", price: 18000 },
            { name: "Stir-Fried Beef", price: 9500 },
            { name: "Chicken Sandwich", price: 14000 },
            { name: "Steak Sandwich", price: 18000 },
            { name: "Chicken Wrap", price: 16300 },
            { name: "Beef Wrap", price: 19000 },
            { name: "Eag & Toast", price: 65000 },
            { name: "Club Sandwich", price: 12000 }
        ]
    }
];

// ---------- CART LOGIC ----------
let cart = [];
const cartContainer = document.getElementById('cartItemsContainer');
const subtotalSpan = document.getElementById('subtotal');
const clearBtn = document.getElementById('clearCartBtn');
const orderBtn = document.getElementById('orderViaWABtn');
const nameInput = document.getElementById('customerName');
const locationInput = document.getElementById('customerLocation');
const phoneInput = document.getElementById('customerPhone');

function renderCart() {
    if (!cartContainer) return;
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div style="text-align: center; color: #b9a99b; padding: 1.2rem;">Your cart is empty</div>';
        subtotalSpan.innerText = 'MK 0';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-rest">${item.restaurant}</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <span class="cart-item-price">MK ${item.price}</span>
                    <div class="cart-item-actions">
                        <button onclick="removeFromCart(${index})"><i class="fas fa-times-circle"></i></button>
                    </div>
                </div>
            </div>
        `;
    });
    cartContainer.innerHTML = html;
    subtotalSpan.innerText = `MK ${total}`;
}

window.addToCart = function(foodName, foodPrice, restaurantName) {
    cart.push({ name: foodName, price: foodPrice, restaurant: restaurantName });
    renderCart();
};

window.removeFromCart = function(index) {
    if (index >= 0 && index < cart.length) cart.splice(index, 1);
    renderCart();
};

clearBtn.addEventListener('click', function() { cart = []; renderCart(); });

orderBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const location = locationInput.value.trim();
    const phone = phoneInput.value.trim();
    if (!name || !location || !phone) {
        alert('Please fill in your name, location, and phone number.');
        return;
    }
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    let message = `Hello Phindu Food Courier! I'd like to order:\n`;
    cart.forEach((item, i) => {
        message += `${i+1}. ${item.name} (${item.restaurant}) - MK ${item.price}\n`;
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\nSubtotal: MK ${total}\nName: ${name}\nLocation: ${location}\nPhone: ${phone}\n\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});

// ---------- RENDER RESTAURANT TILES ----------
const tilesContainer = document.getElementById('restaurant-tiles');
const foodMenuContainer = document.getElementById('food-menu');

function renderRestaurantTiles() {
    let html = '';
    restaurants.forEach(rest => {
        const logoSrc = getLogoSrc(rest.name);
        html += `
            <div class="restaurant-tile" data-restaurant="${rest.name}">
                <img class="tile-img" src="${logoSrc}" alt="${rest.name}" loading="lazy"
                    onerror="this.src='https://via.placeholder.com/200x200?text=${encodeURIComponent(rest.name)}'">
                <h3>${rest.name}</h3>
            </div>
        `;
    });
    tilesContainer.innerHTML = html;

    // Add click listeners to tiles
    document.querySelectorAll('.restaurant-tile').forEach(tile => {
        tile.addEventListener('click', function() {
            const restName = this.dataset.restaurant;
            // Remove active class from all tiles
            document.querySelectorAll('.restaurant-tile').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // Render food for this restaurant
            renderFoodMenu(restName);
        });
    });
}

function renderFoodMenu(restaurantName) {
    const restaurant = restaurants.find(r => r.name === restaurantName);
    if (!restaurant) return;

    let foodHtml = `<div class="menu-title"><i class="fas fa-utensils"></i> ${restaurant.name} Menu</div>`;
    foodHtml += '<div class="food-grid">';

    restaurant.food.forEach(item => {
        const foodSrc = getFoodSrc(item.name);
        const escapedName = item.name.replace(/'/g, "\\'");
        const escapedRest = restaurant.name.replace(/'/g, "\\'");
        foodHtml += `
            <div class="food-card">
                <img class="food-img" src="${foodSrc}" alt="${item.name}" loading="lazy"
                    onerror="this.src='https://via.placeholder.com/200x200?text=${encodeURIComponent(item.name)}'">
                <h3>${item.name}</h3>
                <div class="food-price">MK ${item.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${escapedName}', ${item.price}, '${escapedRest}')">
                    <i class="fas fa-cart-plus"></i> Add
                </button>
            </div>
        `;
    });

    foodHtml += '</div>';
    foodMenuContainer.innerHTML = foodHtml;
}

// Initialize: render restaurant tiles, and optionally select first restaurant
renderRestaurantTiles();
// Select first restaurant by default
const firstTile = document.querySelector('.restaurant-tile');
if (firstTile) {
    firstTile.classList.add('active');
    renderFoodMenu(firstTile.dataset.restaurant);
}

// Initial cart render
renderCart();