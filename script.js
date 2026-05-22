const products = [
    { id: 1, title: "Піца Пепероні", price: 180, image: "https://dr.veteranopizza.com/image/catalog/pizza/peperoni.jpg", category: "pizza" },
    { id: 2, title: "Піца 4 сири", price: 190, image: "https://omnomnom.dp.ua/image/cache/catalog/pizza_new/new/img_0785-500x500.jpg", category: "pizza" },
    { id: 3, title: "Піца Маргарита", price: 150, image: "https://dr.veteranopizza.com/image/catalog/pizza/margo.jpg", category: "pizza" },
    { id: 4, title: "Піца Гавайська", price: 170, image: "https://omnomnom.dp.ua/image/cache/catalog/pizza_new/new/img_0692-500x500.jpg", category: "pizza" },
    { id: 5, title: "Піца BBQ", price: 200, image: "https://panda-pizza.com.ua/cache/original/img/dishes/pizza/bbq.jpg?09102025", category: "pizza" },

    { id: 6, title: "Чізбургер", price: 130, image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Cheeseburger:nutrition-calculator-tile?wid=822&hei=822&dpr=off", category: "burger" },
    { id: 7, title: "Бургер BBQ", price: 150, image: "https://s7d1.scene7.com/is/image/mcdonalds/Ukr_Burg_Beef:2-column-desktop?resmode=sharp2", category: "burger" },
    { id: 8, title: "Подвійний бургер", price: 170, image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_Double-Cheeseburger:nutrition-calculator-tile?wid=822&hei=822&dpr=off", category: "burger" },
    { id: 9, title: "Курячий бургер", price: 140, image: "https://s7d1.scene7.com/is/image/mcdonalds/McD_McChicken:nutrition-calculator-tile?resmode=sharp2", category: "burger" },

    { id: 10, title: "Картопля фрі", price: 80, image: "https://chizpizza.kh.ua/wp-content/uploads/2023/04/krtoplya-fri.jpg", category: "snacks" },
    { id: 11, title: "Картопля по-селянськи", price: 90, image: "https://chizpizza.kh.ua/wp-content/uploads/2023/04/kartoplya-po-selyanski.jpg", category: "snacks" },
    { id: 12, title: "Нагетси", price: 110, image: "https://chizpizza.kh.ua/wp-content/uploads/2023/04/nagetsi.jpg", category: "snacks" },
    { id: 13, title: "Сирні палички", price: 120, image: "https://pizzalife.ua/files/images/111/2/%D1%81%D1%8B%D1%80%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B8.jpg", category: "snacks" },

    { id: 14, title: "Суші сет", price: 250, image: "https://sushi-pizza39.com.ua/image/cache/catalog/2025photo/sets/pop-700x700.jpg", category: "sushi" },
    { id: 15, title: "Філадельфія рол", price: 210, image: "https://sushiholl.com.ua/wp-content/uploads/2018/11/filadelfiya.jpg", category: "sushi" },
    { id: 16, title: "Каліфорнія рол", price: 200, image: "https://sushi-island.com.ua/wp-content/uploads/2025/07/1000h668_kaliforniya-v-kunzhuti.png", category: "sushi" },

    { id: 17, title: "Паста Карбонара", price: 170, image: "https://klopotenko.com/wp-content/uploads/2018/10/Pasta-Karbonara_siteWEbUkr.jpg", category: "pasta" },
    { id: 18, title: "Паста Болоньєзе", price: 165, image: "https://dailylviv.com/assets/upload/%D0%BB106.jpg", category: "pasta" },

    { id: 19, title: "Салат Цезар", price: 140, image: "https://www.torchyn.ua/sites/default/files/2023-08/_DSC3997%D0%BC1.jpg", category: "salad" },
    { id: 20, title: "Грецький салат", price: 120, image: "https://i.obozrevatel.com/food/recipemain/2018/11/15/screenshot81.png?size=636x424", category: "salad" },

    { id: 21, title: "Стейк яловичий", price: 320, image: "https://halytska-svizhyna.ua/wp-content/uploads/2024/05/fa7bd904e69911ee8660d45d6408b3ce_d2969feb093111ef8665d45d6408b3ce.jpg", category: "main" },
    { id: 22, title: "Куряче філе гриль", price: 160, image: "https://images.silpo.ua/v2/products/744x744/webp/6bc4bf83-ef2b-410d-97f7-c2df2cb00cd8.png", category: "main" },

    { id: 23, title: "Чізкейк", price: 120, image: "https://la-torta.ua/content/uploads/images/12-cake.jpg", category: "dessert" },
    { id: 24, title: "Шоколадний торт", price: 110, image: "https://images.unian.net/photos/2024_09/thumb_files/800_0_1726381904-6793.jpg?r=388324", category: "dessert" },
    { id: 25, title: "Морозиво", price: 70, image: "https://lasunka.com/s123-1.jpg", category: "dessert" },

    { id: 26, title: "Кока-Кола", price: 50, image: "https://shukayum.am/wp-content/uploads/2023/11/36s-600x600.jpg", category: "drink" },
    { id: 27, title: "Лимонад", price: 60, image: "https://i.evrasia.in.ua/data/1400_0/products/mKOVz6TPaYIzUSxu.webp", category: "drink" },
    { id: 28, title: "Сік апельсиновий", price: 60, image: "https://gastro.freshbaza.com.ua/pub/media/catalog/product/cache/c135b7190b7061fdb186fafa527efb9c/1/0/1076_-_2023-10-30t111108.007.png", category: "drink" },
    { id: 29, title: "Капучино", price: 70, image: "https://www.starbucksathome.com/ua/sites/default/files/styles/recipe_recommendation/public/2024-06/Recipe%20Refresh_Cappuccino_1842x1542_CS.png?itok=zTjf0oWm", category: "drink" },
    { id: 30, title: "Латте", price: 75, image: "https://img.freepik.com/premium-photo/latte-coffee-isolated-white-background_488220-8401.jpg", category: "drink" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// =======================
// ЛІЧИЛЬНИК КОШИКА
// =======================
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) return;
    cartCount.textContent = cart.length;
}

// =======================
// TOAST
// =======================
function showToast(text) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = text;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// =======================
// КОШИК
// =======================
function addToCart(product) {
    cart.push(product);
    saveCart();
    showToast("Товар додано до кошика!");
    updateCartCount();
}

// =======================
// РЕНДЕР МЕНЮ
// =======================
function renderProducts(category, containerId, listData = products) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    const list = listData.filter(p => p.category === category);

    list.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("cart");

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>${product.price} грн</p>
            <button class="add-btn">Додати</button>
        `;

        card.querySelector(".add-btn").addEventListener("click", () => {
            addToCart(product);
        });

        container.appendChild(card);
    });
}

function renderPopularProducts() {

    const container = document.getElementById("popular-container");

    if (!container) return;

    container.innerHTML = "";

    const popularProducts = products.slice(0, 4);

    popularProducts.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
    <img src="${product.image}">
    <h3>${product.title}</h3>
    <p>${product.price} грн</p>

    <a href="menu.html" class="add-btn">Замовити</a>
`;

        container.appendChild(card);
    });
}

// =======================
// ФІЛЬТРИ
// =======================
function filterAndRender() {

    const search = document.getElementById("search-input")?.value.toLowerCase() || "";
    const category = document.getElementById("category-filter")?.value || "all";
    const minPrice = document.getElementById("min-price-input")?.value || "";

    const filtered = products.filter(p => {

        const matchSearch = p.title.toLowerCase().includes(search);

        const matchCategory =
            category === "all" || p.category === category;

        const matchPrice =
            minPrice === "" || p.price >= Number(minPrice);

        return matchSearch && matchCategory && matchPrice;
    });

    const cats = [
        "pizza", "burger", "snacks",
        "sushi", "pasta", "salad",
        "main", "dessert", "drink"
    ];

    cats.forEach(c => {

        const container = document.getElementById(c + "-container");

        if (!container) return;

        container.innerHTML = "";

        const list = filtered.filter(p => p.category === c);

        const section =
            container.closest("section") || container.parentElement;

        // 🔥 НЕ ховаємо popular
        if (section && !section.classList.contains("popular")) {

            if (list.length === 0) {
                section.style.display = "none";
                return;
            }

            section.style.display = "block";
        }

        list.forEach(product => {

            const card = document.createElement("div");

            card.classList.add("cart");

            card.innerHTML = `
                <img src="${product.image}">
                <h3>${product.title}</h3>
                <p>${product.price} грн</p>
                <button class="add-btn">Додати</button>
            `;

            card.querySelector(".add-btn").addEventListener("click", () => {
                addToCart(product);
            });

            container.appendChild(card);
        });
    });
}

// =======================
// КОШИК (+ -)
// =======================
function renderCart() {

    const container = document.getElementById("cart-container");
    const totalEl = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (!container || !totalEl || !checkoutBtn) return;

    container.innerHTML = "";

    // ==========================
    // ЯКЩО КОШИК ПОРОЖНІЙ
    // ==========================
    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-cart">
                <h2>Кошик порожній 🛒</h2>
                <p>Додайте товари з меню!</p>
            </div>
        `;

        totalEl.style.display = "none";
        checkoutBtn.style.display = "none";

        // Оновлюємо лічильник у хедері
        updateCartCount();

        return;
    }

    // ==========================
    // ЯКЩО Є ТОВАРИ
    // ==========================
    totalEl.style.display = "block";
    checkoutBtn.style.display = "block";

    let total = 0;

    const grouped = {};

    cart.forEach(item => {

        if (!grouped[item.id]) {
            grouped[item.id] = { ...item, qty: 0 };
        }

        grouped[item.id].qty++;
    });

    Object.values(grouped).forEach(product => {

        total += product.price * product.qty;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>${product.price} грн</p>

            <div class="qty-controls">
                <button class="minus">-</button>
                <span>${product.qty}</span>
                <button class="plus">+</button>
            </div>
        `;

        // Кнопка мінус
        div.querySelector(".minus").addEventListener("click", () => {

            const i = cart.findIndex(x => x.id === product.id);

            if (i !== -1) {
                cart.splice(i, 1);
            }

            saveCart();
            renderCart();
            updateCartCount();
        });

        // Кнопка плюс
        div.querySelector(".plus").addEventListener("click", () => {

            cart.push(product);

            saveCart();
            renderCart();
            updateCartCount();

            showToast("Додано ще один товар");
        });

        container.appendChild(div);
    });

    // Загальна сума
    totalEl.textContent = `Загальна сума: ${total} грн`;

    // Оновлюємо лічильник
    updateCartCount();
}

// =======================
// МОДАЛКА
// =======================
function setupCheckout() {

    const btn = document.getElementById("checkout-btn");
    const modal = document.getElementById("modal");
    const confirm = document.getElementById("confirm-order");

    if (!btn || !modal || !confirm) return;

    // Відкрити модальне вікно
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Підтвердження замовлення
    confirm.addEventListener("click", () => {

        // Очищаємо кошик
        cart = [];

        // Зберігаємо зміни в localStorage
        saveCart();

        // Оновлюємо список товарів
        renderCart();

        // Оновлюємо лічильник у шапці
        updateCartCount();

        // Показуємо повідомлення про успішне замовлення
        modal.querySelector(".modal-content").innerHTML = `
            <h2>Дякуємо за замовлення! 🎉</h2>
            <p>Ваше замовлення успішно оформлено.</p>
        `;

        // Через 3 секунди закриваємо модальне вікно
        setTimeout(() => {
            modal.style.display = "none";
        }, 3000);
    });
}

// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded", () => {

    renderPopularProducts();

    renderProducts("pizza", "pizza-container");
    renderProducts("burger", "burger-container");
    renderProducts("snacks", "snacks-container");
    renderProducts("sushi", "sushi-container");
    renderProducts("pasta", "pasta-container");
    renderProducts("salad", "salad-container");
    renderProducts("main", "main-container");
    renderProducts("dessert", "dessert-container");
    renderProducts("drink", "drink-container");

    renderCart();

    // Показуємо кількість товарів у кошику
    updateCartCount();

    setupCheckout();

    document.getElementById("search-input")
        ?.addEventListener("input", filterAndRender);

    document.getElementById("category-filter")
        ?.addEventListener("change", filterAndRender);

    document.getElementById("min-price-input")
        ?.addEventListener("input", filterAndRender);
});