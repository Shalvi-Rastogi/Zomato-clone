
document.addEventListener("DOMContentLoaded", () => {  //domcon..loaded is used bc it ensures that all html elements are available.
    const restaurants = [
     "McDonald's",
       "KFC",
        "Burger King",
        "Barbeque Nation",
        "Domino's Pizza",
        "Subway",
        "Pizza Hut",
        "Starbucks",
        "Taco Bell",
        "Chipotle",
        "Panda Express",
        "Dunkin' Donuts",
        "Five Guys","Haldiram's","Tunday Kababi","Biryani Blues"

    ];

    const searchBox = document.getElementById("searchBox");
    const restaurantList = document.getElementById("restaurantList");

    searchBox.addEventListener("input", () => {
        const query = searchBox.value.toLowerCase().trim();
        restaurantList.innerHTML = "";

        if (query === "") {
            return; 
        }

        const filters = restaurants.filter(restaurant =>
            restaurant.toLowerCase().includes(query)
        );

        if (filters.length === 0) {
            restaurantList.innerHTML = `<li>No results found</li>`;
            return;
        }

        filters.forEach(restaurant => {
            const li = document.createElement("li");
            li.textContent = restaurant;
            li.addEventListener("click", () => {
                alert("Great!!")
                searchBox.value = restaurant; // Set selected restaurant
                restaurantList.innerHTML = ""; // Hide suggestions
            });
            restaurantList.appendChild(li);
        });
    });

    // Hide list when clicking outside
    document.addEventListener("click", (e) => {
        if (!searchBox.contains(e.target) && !restaurantList.contains(e.target)) {
            restaurantList.innerHTML = "";
        }
    });
});
