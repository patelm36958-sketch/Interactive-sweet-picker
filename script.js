const favButtons = document.querySelectorAll(".favorite-icon");

const toggleFavorite = (event) => {
    const btn = event.currentTarget;
    const isFilled = btn.classList.toggle("filled");
    
    btn.innerHTML = isFilled ? "&#10084;" : "&#9825;";
    
    console.log(`Item status: ${isFilled ? 'Added to favorites' : 'Removed'}`);
};

favButtons.forEach(btn => btn.addEventListener("click", toggleFavorite));