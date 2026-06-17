document.addEventListener("DOMContentLoaded", function () {
    const farmEvents = [
        {
            name: "Sunflower U-Pick",
            season: "spring",
            dates: "Mid-May through June",
            description: "Walk the rows and cut your own sunflower bouquet."
        },
        {
            name: "Strawberry Picking",
            season: "spring",
            dates: "April through June weekends",
            description: "Pick fresh strawberries during U-Pick weekends."
        },
        {
            name: "Baby Animal Visits",
            season: "spring",
            dates: "April through June",
            description: "Meet chicks, ducklings, and baby goats in the barn."
        },
        {
            name: "Blueberry Picking",
            season: "summer",
            dates: "July through early August",
            description: "Visit the berry fields and pick fresh blueberries."
        },
        {
            name: "Farm-to-Table Dinner",
            season: "summer",
            dates: "Select Saturday evenings",
            description: "Enjoy a ticketed dinner inside the covered pavilion."
        },
        {
            name: "Second Sunflower Bloom",
            season: "summer",
            dates: "Late July",
            description: "Visit the farm for another bright sunflower bloom."
        },
        {
            name: "Corn Maze",
            season: "fall",
            dates: "Labor Day through November",
            description: "Explore a 5-acre maze with a new design each year."
        },
        {
            name: "Pumpkin Patch",
            season: "fall",
            dates: "September through November",
            description: "Choose from more than 20 pumpkin varieties."
        },
        {
            name: "Hayrides",
            season: "fall",
            dates: "Weekends through October",
            description: "Ride around the farm on a tractor-pulled wagon."
        },
        {
            name: "Apple Cider Pressing",
            season: "fall",
            dates: "September through November",
            description: "Watch fresh cider being made and take a jug home."
        },
        {
            name: "Fall Harvest Festival",
            season: "fall",
            dates: "Last two weekends of October",
            description: "Enjoy food vendors, live music, crafts, and farm fun."
        },
        {
            name: "Holiday Market",
            season: "winter",
            dates: "First three weekends of December",
            description: "Shop artisan goods, farm gifts, wreaths, and more."
        },
        {
            name: "Christmas Trees",
            season: "winter",
            dates: "December",
            description: "Pick from pre-cut and choose-and-cut Christmas trees."
        }
    ];

    const eventsGrid = document.getElementById("eventsGrid");
    const eventButtons = document.querySelectorAll(".events-filter-btn");

    function showEvents(season) {
        eventsGrid.innerHTML = "";

        farmEvents.forEach(function (event) {
            if (season === "all" || event.season === season) {
                eventsGrid.innerHTML += `
                    <article class="event-card event-${event.season}">
                        <h3>${event.name}</h3>
                        <p class="event-date">${event.dates}</p>
                        <p class="event-description">${event.description}</p>
                    </article>
                `;
            }
        });
    }

    eventButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            eventButtons.forEach(function (otherButton) {
                otherButton.classList.remove("active");
            });

            button.classList.add("active");

            const selectedSeason = button.getAttribute("data-season");

            showEvents(selectedSeason);
        });
    });

    showEvents("all");
});