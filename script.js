// ---------- YOUR WHATSAPP NUMBER (international format, no spaces or +) ----------
const WHATSAPP_NUMBER = '265881006198'; // ✅ Your number added

// ---------- IMAGE MAPPING ----------
const imageMap = {
    logos: {
        "KIPS": "images/kips-logo.jpg",
        "GALITOS": "images/galitos-logo.jpg",
        "KWITHU COFFEE DEN": "images/kwiithu-logo.jpg",
        "MEAT ZONE": "images/meat-zone-logo.jpg",
        "BELLA'S FOOD COURT": "https://via.placeholder.com/300x200?text=Bella's",
        "CHICKEN LITOS": "https://via.placeholder.com/300x200?text=Chicken+Litos"
    },
    foods: {
        // KIPS
        "Egg Roll": "images/egg-roll.jpg",
        "1 Fried Chicken & Chips": "images/fried-chicken-chips.jpg",
        "Chips & Sausage": "images/plain-chips.jpg",
        "Chips & Eggs": "images/eggs-chips.jpg",
        "Chicken Piece": "images/grilled-chicken-hips.jpg",
        "Nsima & Chambo": "images/nsima-chambo.jpg",
        "1 Chicken Stew & Chips": "images/local-rice-chicken.jpg",
        "Beef Stew & Chips": "images/grilled-steak.jpg",
        "Sausage": "images/plain-chips.jpg",
        "Beef Samosas": "https://via.placeholder.com/200x200?text=Beef+Samosas",
        "Burger": "images/delicious-cheese-burger.jpg",
        "Delicious Burger": "images/delicious-cheese-burger.jpg",
        "Large Pizza": "images/large-pizza.jpg",
        "Medium Pizza": "images/medium-pizza.jpg",
        "Small Pizza": "images/small-pizza.jpg",
        "Egg Sandwich": "images/egg-cheese-sandwich.jpg",
        "Club Sandwich": "images/club-sandwich.jpg",
        // GALITOS
        "Grilled Chicken": "images/grilled-chicken-hips.jpg",
        "18 Grilled Chicken": "images/grilled-chicken-hips.jpg",
        "12 Grilled Chicken": "images/grilled-chicken-hips.jpg",
        "6 Grilled Chicken": "images/grilled-chicken-hips.jpg",
        "Chicken + Chips": "images/fried-chicken-chips.jpg",
        "12 Chicken Pieces + Large Chips": "images/fried-chicken-chips.jpg",
        "6 Chicken + Large Chips": "images/fried-chicken-chips.jpg",
        "3 Pieces of Chicken + Chips": "images/fried-chicken-chips.jpg",
        "Chicken + Rice": "images/local-rice-chicken.jpg",
        "Chicken + Chips + Coleslaw": "images/fried-chicken-chips.jpg",
        "Plain Chips": "images/plain-chips.jpg",
        "Masala Chips": "images/masala-chips.jpg",
        "Chicken Burger": "images/delicious-cheese-burger.jpg",
        "Chicken Burger + Cheese": "images/delicious-cheese-burger.jpg",
        "Chicken Burger + Chips": "images/delicious-cheese-burger.jpg",
        "Chicken Burger + Cheese + Chips": "images/delicious-cheese-burger.jpg",
        "300ml Coke": "https://via.placeholder.com/200x200?text=Coke",
        "300ml Water": "https://via.placeholder.com/200x200?text=Water",
        "Chilli Beans": "https://via.placeholder.com/200x200?text=Chilli+Beans",
        "Coleslaw": "images/coleslaw.jpg",
        "Spicy Rice": "images/spicy-rice.jpg",
        // BELLA'S
        "Chicken Burger": "images/delicious-cheese-burger.jpg",
        "Classic Burger": "images/delicious-cheese-burger.jpg",
        "Chips & Chicken": "images/fried-chicken-chips.jpg",
        "Chicken Pizza": "images/hawaiian-pizza.jpg",
        "Surpreme Pizza": "images/hawaiian-pizza.jpg",
        "Hawaiian Pizza": "images/hawaiian-pizza.jpg",
        "Veggie Pizza": "images/hawaiian-pizza.jpg",
        "Meat Lovers": "images/meat-zone-logo.jpg",
        "T-bone Steak(Chips/Rice)": "images/grilled-steak.jpg",
        "Local Chicken(Nsima/Rice)": "images/local-rice-chicken.jpg",
        "Chambo(Rice/Nsima)": "images/nsima-chambo.jpg",
        "Grilled Chicken(Chips/Rice)": "images/grilled-chicken-hips.jpg",
        "Beef Stir Fry": "images/grilled-steak.jpg",
        "Samosas": "https://via.placeholder.com/200x200?text=Samosas",
        "Sausages": "images/plain-chips.jpg",
        "Chicken Wings": "images/grilled-chicken-wings.jpg",
        // KWITU
        "Kwitu Breakfast": "images/kwiithu-breakfast.jpg",
        "Beef Burger": "images/delicious-cheese-burger.jpg",
        "Cheese Beef Burger": "images/delicious-cheese-burger.jpg",
        "Chicken Sandwich": "images/club-sandwich.jpg",
        "Steak Sandwich": "images/grilled-steak.jpg",
        "Chicken Wrap": "https://via.placeholder.com/200x200?text=Chicken+Wrap",
        "Beef Wrap": "https://via.placeholder.com/200x200?text=Beef+Wrap",
        "T-bone steak": "images/grilled-t-bone-chips.jpg",
        "Small Pizza(BBQ Beef)": "images/hawaiian-pizza.jpg",
        "Small Pizza(Chicken)": "images/hawaiian-pizza.jpg",
        "Small Pizza(Vegetarian)": "images/hawaiian-pizza.jpg",
        "Medium Pizza(BBQ Beef)": "images/hawaiian-pizza.jpg",
        "Medium Pizza(Chicken)": "images/hawaiian-pizza.jpg",
        "Medium Pizza(Vegetarian)": "images/hawaiian-pizza.jpg",
        "Large Pizza(BBQ Beef)": "images/hawaiian-pizza.jpg",
        "Large Pizza(Chicken)": "images/hawaiian-pizza.jpg",
        "Large Pizza(Vegetarian)": "images/hawaiian-pizza.jpg",
        "Sticky Wings": "images/sticky-chicken-wings.jpg",
        "Samosa": "https://via.placeholder.com/200x200?text=Samosa",
        "Doughnuts": "images/doughnuts.jpg",
        "Chocolate Doughnuts": "images/doughnuts.jpg",
        "Eag & Toast": "images/egg-toast.jpg",
        // MEAT ZONE
        "Masala Chips": "images/masala-chips.jpg",
        "Chips & Eggs": "images/eggs-chips.jpg",
        "Peri Peri Wings": "images/grilled-chicken-wings.jpg",
        "Chicken Wings": "images/grilled-chicken-wings.jpg",
        "Grilled Chicken": "images/grilled-chicken-hips.jpg",
        "Char-grilled Pork ribs": "images/grilled-ribs.jpg",
        "T-bone Steak": "images/grilled-t-bone-chips.jpg",
        "Nshima & Chambo": "images/nsima-chambo.jpg",
        "Stir-Fried Beef": "images/grilled-steak.jpg",
        "Chicken Sandwich": "images/club-sandwich.jpg",
        "Steak Sandwich": "images/grilled-steak.jpg",
        "Chicken Wrap": "https://via.placeholder.com/200x200?text=Chicken+Wrap",
        "Beef Wrap": "https://via.placeholder.com/200x200?text=Beef+Wrap",
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
            { name: "Grilled Chicken", price: 12500 },
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
            { name: "Chicken Pizza", price: 25000 },
            { name: "Surpreme Pizza", price: 24000 },
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
        { name: "Chicken Litos Special", price: 4800 },
        { name: "Chicken Wrap", price: 3300 },
        { name: "Nuggets", price: 2600 }
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
            { name: "Nshima & Chambo", price: 18000 },
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

    // Encode message and open WhatsApp with your number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});

// ---------- GENERATE RESTAURANT HTML ----------
const container = document.getElementById('restaurant-list');
if (container) {
    let htmlString = '';
    restaurants.forEach(rest => {
        const logoSrc = getLogoSrc(rest.name);
        htmlString += `
            <div class="restaurant-card">
                <div class="restaurant-header">
                    <img class="restaurant-img" src="${logoSrc}" alt="${rest.name}" loading="lazy"
                        onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(rest.name)}'">
                    <div class="restaurant-title">
                        <h2>${rest.name}</h2>
                        <p><i class="fas fa-store-alt"></i> authentic taste</p>
                    </div>
                </div>
                <div class="food-row">
        `;
        rest.food.forEach(item => {
            const foodSrc = getFoodSrc(item.name);
            const escapedName = item.name.replace(/'/g, "\\'");
            const escapedRest = rest.name.replace(/'/g, "\\'");
            htmlString += `
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
        htmlString += `</div></div>`;
    });
    container.innerHTML = htmlString;
}

// Initial cart render
renderCart();