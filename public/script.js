// Simple button click event
const button = document.getElementById('clickBtn');
const output = document.getElementById('output');
let clickCount = 0;
button.addEventListener('click', () => {
    clickCount++;
    output.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
});
console.log('Website loaded successfully!');