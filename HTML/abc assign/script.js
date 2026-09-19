const randomColours = ['green', 'blue', 'red'];

function applyRandomColour(element) {
    const colour = randomColours[Math.floor(Math.random() * randomColours.length)];
    element.style.color = colour;
}

document.querySelectorAll('h5').forEach((heading) => {
    heading.addEventListener('click', () => applyRandomColour(heading));
    heading.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            applyRandomColour(heading);
        }
    });
});
