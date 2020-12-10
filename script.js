function displayMenu() {
    const elementById = document.getElementById('burger-elements');
    if (elementById.style.display === "block") {
        elementById.style.display = "none"
    } else {
        elementById.style.display = "block"
    }
}
