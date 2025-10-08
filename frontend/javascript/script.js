const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", document.documentElement.scrollTop > 0);
});
const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');

if (searchButton && searchBar) {
    searchButton.addEventListener('mouseenter', () => {
        if (!searchBar.classList.contains('visible')) {
            searchBar.classList.add('visible');
            searchBar.classList.remove('hidden');
            searchBar.focus();
        }
    });

    searchBar.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchBar.value.trim();
            if (query) {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}



searchButton.addEventListener('click', () => {
    if (!searchBar.classList.contains('visible')) {
        searchBar.classList.add('visible');
        searchBar.classList.remove('hidden');
        searchBar.focus();
    } else {
        const query = searchBar.value.trim();
        if (query) {
            // Redirect to the results page with the query as a parameter
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
    }
});
// Function to toggle the side panel
function toggleSidePanel() {
    const sidePanel = document.getElementById('side-panel');
    sidePanel.classList.toggle('open');
}
// Local Timer clock
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    
    document.getElementById("clock").textContent = `Local/ ${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call once to prevent delay
updateClock();
