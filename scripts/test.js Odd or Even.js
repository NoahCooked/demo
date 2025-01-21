console.log("Script is running");

const numberInput = document.getElementById('number-input');
const checkButton = document.getElementById('check-button');
checkButton.addEventListener('click',() => {
    console.log("Button clicked");
    const userInput = parseInt(numberInput.value);
    if (isNaN(userInput)) {
        alert('Please enter a valid number');
    } else {
        if (userInput % 2 === 0) {
            alert('This is even');
        } else {
            alert('This is odd');
        }
    }
});
