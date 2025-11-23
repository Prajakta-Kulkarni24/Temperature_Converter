function computeTemp(event) {
  const value = parseFloat(event.target.value);
  const id = event.target.id;

  const c = document.getElementById("celsius");
  const f = document.getElementById("fahrenheit");
  const k = document.getElementById("kelvin");
  const error = document.getElementById("error");

  error.textContent = ""; // Clear previous error

  // Empty input clears all
  if (event.target.value.trim() === "") {
    c.value = "";
    f.value = "";
    k.value = "";
    return;
  }

  // Kelvin cannot be below 0
  if (id === "kelvin" && value < 0) {
    error.textContent = "❌ Kelvin cannot be negative!";
    k.value = "";
    return;
  }

  // Vibration on value change (mobile)
  if (navigator.vibrate) {
    navigator.vibrate(20);
  }

  // Conversion logic
  if (id === "celsius") {
    f.value = (value * 9/5 + 32).toFixed(2);
    k.value = (value + 273.15).toFixed(2);
  }

  if (id === "fahrenheit") {
    c.value = ((value - 32) * 5/9).toFixed(2);
    k.value = (((value - 32) * 5/9) + 273.15).toFixed(2);
  }

  if (id === "kelvin") {
    c.value = (value - 273.15).toFixed(2);
    f.value = ((value - 273.15) * 9/5 + 32).toFixed(2);
  }
}

/* Manual Convert Button */
function manualConvert() {
  computeTemp({ target: document.activeElement });
}

/* Reset Button */
function resetAll() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("kelvin").value = "";
  document.getElementById("error").textContent = "";
}

/* Dark Mode */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
