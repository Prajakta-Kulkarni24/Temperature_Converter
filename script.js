// Temperature conversion
document.getElementById('convertBtn').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;

    if (isNaN(temp)) {
        document.getElementById('result').innerText = "Please enter a valid number!";
        return;
    }

    let celsius;

    if (from === "C") {
        celsius = temp;
    } else if (from === "F") {
        celsius = (temp - 32) * 5/9;
    } else if (from === "K") {
        celsius = temp - 273.15;
    }

    let result;
    if (to === "C") {
        result = celsius.toFixed(2) + " °C";
    } else if (to === "F") {
        result = (celsius * 9/5 + 32).toFixed(2) + " °F";
    } else if (to === "K") {
        result = (celsius + 273.15).toFixed(2) + " K";
    }

    document.getElementById('result').innerText = result;
});

// Custom on-screen keyboard
const keys = document.querySelectorAll('.keyboard .key');
const input = document.getElementById('temperature');

keys.forEach(key => {
    key.addEventListener('click', () => {
        if (key.id === 'clear') {
            input.value = '';
        } else if (key.id === 'delete') {
            input.value = input.value.slice(0, -1);
        } else {
            input.value += key.textContent;
        }
    });
});