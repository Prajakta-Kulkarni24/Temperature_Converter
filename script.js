let active = "celsius";

function setActive(id) {
    active = id;
}

function press(num) {
    let box = document.getElementById(active);
    box.value += num;
    convert(active);
}

function backspace() {
    let box = document.getElementById(active);
    box.value = box.value.slice(0, -1);
    convert(active);
}

function clearInput() {
    document.getElementById(active).value = "";
    convert(active);
}

function convert(type) {
    let c = document.getElementById("celsius");
    let f = document.getElementById("fahrenheit");
    let k = document.getElementById("kelvin");
    let error = document.getElementById("kelvin-error");

    error.textContent = "";

    let cv = parseFloat(c.value);
    let fv = parseFloat(f.value);
    let kv = parseFloat(k.value);

    if (type === "celsius") {
        if (isNaN(cv)) return f.value = k.value = "";
        f.value = ((cv * 9/5) + 32).toFixed(2);
        k.value = (cv + 273.15).toFixed(2);
    }

    if (type === "fahrenheit") {
        if (isNaN(fv)) return c.value = k.value = "";
        c.value = ((fv - 32) * 5/9).toFixed(2);
        k.value = (parseFloat(c.value) + 273.15).toFixed(2);
    }

    if (type === "kelvin") {
        if (kv < 0) return error.textContent = "Kelvin cannot be negative!";
        if (isNaN(kv)) return c.value = f.value = "";
        c.value = (kv - 273.15).toFixed(2);
        f.value = ((c.value * 9/5) + 32).toFixed(2);
    }
}

function resetAll() {
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
}

/* DARK MODE */
document.getElementById("modeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};
