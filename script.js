document.addEventListener("DOMContentLoaded", function () {
    var togglers = document.querySelectorAll(".navbar-toggler");

    togglers.forEach(function (button) {
        var targetSelector = button.getAttribute("data-bs-target");
        if (!targetSelector) {
            return;
        }

        var target = document.querySelector(targetSelector);
        if (!target) {
            return;
        }

        button.addEventListener("click", function () {
            var isShown = target.classList.toggle("show");
            button.setAttribute("aria-expanded", isShown ? "true" : "false");
        });
    });
});
const farmProducts = [
    {
        name: "Apple Pie",
        category: "fruit",
        description: "Farm-made pie using seasonal apples.",
        image: "Client Files/Products/product-apple-pie.png",
        price: "$14.00",
        displayNote: "weekends only"
    },
    {
        name: "Blueberry Preserves",
        category: "fruit",
        description: "Small-batch preserves from peak berry season.",
        image: "Client Files/Products/product-blueberry-preserves.png",
        price: "$8.00",
        displayNote: "made in-house"
    },
    {
        name: "Fresh Apple Cider",
        category: "fruit",
        description: "Fresh cider pressed on-site and sold by the jug.",
        image: "Client Files/Products/product-apple-cider.png",
        price: "$7.00",
        displayNote: "available in fall"
    },
    {
        name: "Raw Honey",
        category: "vegan",
        description: "Local raw honey from three on-site hives.",
        image: "Client Files/Products/product-raw-honey.png",
        price: "$8.00",
        displayNote: "from farm hives"
    },
    {
        name: "Fresh Eggs",
        category: "fresh",
        description: "Farm-fresh eggs available year-round.",
        image: "Client Files/Products/product-fresh-eggs.png",
        price: "$6.00",
        displayNote: "from the 200-hen flock"
    },
    {
        name: "Seasonal Produce Basket",
        category: "fresh",
        description: "A rotating selection from the farm fields.",
        image: "Client Files/Products/product-produce-basket.png",
        price: "$18.00",
        displayNote: "changes by season"
    },
    {
        name: "Sourdough Bread",
        category: "fresh",
        description: "Fresh-baked bread available on weekends.",
        image: "Client Files/Products/product-sourdough-bread.png",
        price: "$9.00",
        displayNote: "weekends only"
    },
    {
        name: "Strawberry Preserves",
        category: "fruit",
        description: "Preserves made with seasonal berries.",
        image: "Client Files/Products/product-strawberry-preserves.png",
        price: "$8.00",
        displayNote: "made in-house"
    }
];

const shopProducts = document.getElementById("shopProducts");
const filterButtons = document.querySelectorAll(".shop-filter-btn");

function showProducts(category) {
    shopProducts.innerHTML = "";

    farmProducts.forEach(function(product) {
        if (category === "all" || product.category === category) {
            shopProducts.innerHTML += `
                <article class="col-12 col-md-6 col-xl-3 shop-card-col">
                    <div class="shop-product-card">
                        <div class="shop-product-img-box">
                            <img src="${product.image}" class="shop-product-img" alt="${product.name} from Hollow Creek Farm">
                        </div>

                        <div class="shop-product-info">
                            <h3>${product.name}</h3>

                            <p>category</p>
                            <p>${product.category}</p>

                            <p>description</p>
                            <p class="product-description">${product.description}</p>

                            <p>price</p>
                            <p>${product.price}</p>

                            <p>display note</p>
                            <p>${product.displayNote}</p>
                        </div>
                    </div>
                </article>
            `;
        }
    });
}

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.getAttribute("data-category");

        showProducts(category);
    });
});

showProducts("all");
