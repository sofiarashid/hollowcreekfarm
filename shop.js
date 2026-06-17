document.addEventListener("DOMContentLoaded", function () {
    const farmProducts = [
        {
            name: "Apple Pie",
            category: "Baked Goods",
            description: "Farm-made pie using seasonal apples.",
            image: "Client Files/productPhotos/product-apple-pie-bakery.png",
            price: "$14.00",
            displayNote: "Weekends only",
            filters: "fruit"
        },
        {
            name: "Blueberry Preserves",
            category: "Pantry",
            description: "Small-batch preserves from peak berry season.",
            image: "Client Files/productPhotos/product-blueberry-preserves-jar.png",
            price: "$8.00",
            displayNote: "Made in-house",
            filters: "fruit vegan"
        },
        {
            name: "Fresh Apple Cider",
            category: "Seasonal",
            description: "Fresh cider pressed on-site and sold by the jug.",
            image: "Client Files/productPhotos/product-fresh-apple-cider-jug.png",
            price: "$7.00",
            displayNote: "Available in fall",
            filters: "fruit vegan"
        },
        {
            name: "Raw Honey",
            category: "Pantry",
            description: "Local raw honey from three on-site hives.",
            image: "Client Files/productPhotos/product-raw-honey-jar.png",
            price: "$8.00",
            displayNote: "From farm hives",
            filters: "fresh"
        },
        {
            name: "Fresh Eggs",
            category: "Dairy & Eggs",
            description: "Farm-fresh eggs available year-round.",
            image: "Client Files/productPhotos/product-fresh-eggs-dozen-carton.png",
            price: "$6.00",
            displayNote: "From the 200-hen flock",
            filters: "fresh"
        },
        {
            name: "Seasonal Produce Basket",
            category: "Produce",
            description: "A rotating selection from the farm fields.",
            image: "Client Files/productPhotos/product-seasonal-produce-basket.png",
            price: "$18.00",
            displayNote: "Changes by season",
            filters: "fresh vegan"
        },
        {
            name: "Sourdough Bread",
            category: "Baked Goods",
            description: "Fresh-baked bread available on weekends.",
            image: "Client Files/productPhotos/product-sourdough-bread-loaf.png",
            price: "$9.00",
            displayNote: "Weekends only",
            filters: "fresh vegan"
        },
        {
            name: "Strawberry Preserves",
            category: "Pantry",
            description: "Preserves made with seasonal berries.",
            image: "Client Files/productPhotos/product-strawberry-preserves-jar.png",
            price: "$8.00",
            displayNote: "Made in-house",
            filters: "fruit vegan"
        }
    ];

    const shopProducts = document.getElementById("shopProducts");
    const filterButtons = document.querySelectorAll(".shop-filter-btn");

    function showProducts(filter) {
        shopProducts.innerHTML = "";

        farmProducts.forEach(function (product) {
            if (filter === "all" || product.filters.includes(filter)) {
                shopProducts.innerHTML += `
                    <article class="shop-card">
                        <div class="shop-img-side">
                            <img src="${product.image}" alt="${product.name} from Hollow Creek Farm">
                        </div>

                        <div class="shop-info-side">
                            <h3>${product.name}</h3>

                            <p>category</p>
                            <p class="shop-answer">${product.category}</p>

                            <p>description</p>
                            <p class="shop-answer">${product.description}</p>

                            <p>price</p>
                            <p class="shop-answer">${product.price}</p>

                            <p>display note</p>
                            <p class="shop-answer">${product.displayNote}</p>
                        </div>
                    </article>
                `;
            }
        });
    }

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterButtons.forEach(function (otherButton) {
                otherButton.classList.remove("active");
            });

            button.classList.add("active");

            const selectedFilter = button.getAttribute("data-filter");

            showProducts(selectedFilter);
        });
    });

    showProducts("all");
});