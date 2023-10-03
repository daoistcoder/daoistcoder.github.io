// Function to load and replace content based on the route
function loadContent(route) {
    const container = document.getElementById("form-container");

    // Define the path to the HTML file corresponding to the route
    const filePath = `mathayog/assets/components/${route}-form.html`;

    // Fetch the content from the HTML file
    fetch(filePath)
        .then((response) => response.text())
        .then((html) => {
            // Insert the fetched HTML content into the container
            container.innerHTML = html;
        })
        .catch((error) => {
            console.error("Error loading content:", error);
        });
}

// Function to update the innerHTML of a div based on the route
function updateDescription(route) {
    const descriptionDiv = document.getElementById("page-description");

    // Map routes to HTML content
    const routeContent = {
        login: "Unlock the secrets of the cities <br>and islands of the Philippines <br>using Math",
        register: "Maglibot-libot sa Pagsusuri ng <br>Matematika sa Buong Pilipinas",
        // Add more HTML content for other routes as needed
    };

    // Update the innerHTML based on the route, or use a default content
    descriptionDiv.innerHTML = routeContent[route] || "Maglibot-libot sa Pagsusuri ng <br>Matematika sa Buong Pilipinas";
}

// Function to handle route changes
function handleRouteChange() {
    const hash = window.location.hash.substr(2); // Remove the '#' and '/'
    const route = hash || "login"; // Default to "login" if no hash

    // Load content based on the route
    loadContent(route);

    // Update the description based on the route
    updateDescription(route);
}

function redirectToPlacement(event) {
    // Prevent the default form submission
    event.preventDefault(); 

    // Redirect to the external URL
    window.location.href = "../mathayog/welcome/";
}


function redirectToLogin(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Redirect to #/login
    window.location.href = "#/login";
}

// Add an event listener to handle route changes
window.addEventListener("hashchange", handleRouteChange);

// Initial route handling
handleRouteChange();
