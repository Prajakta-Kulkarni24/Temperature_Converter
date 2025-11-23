function convert(type) {
    let c = document.getElementById("celsius");
    let f = document.getElementById("fahrenheit");
    let k = document.getElementById("kelvin");
    let error = document.getElementById("kelvin-error");

    error.innerText = "";

    if (type === "celsius") {
        let cVal = parseFloat(c.value);
        if (isNaN(cVal)) return (f.value = k.value = "");
        f.value = ((cVal * 9/5) + 32).toFixed(2);
        k.value = (cVal + 273.15).toFixed(2);

    } else if (type === "fahrenheit") {
        let fVal = parseFloat(f.value);
        if (isNaN(fVal)) return (c.value = k.value = "");
        c.value = ((fVal - 32) * 5/9).toFixed(2);
        k.value = (parseFloat(c.value) + 273.15).toFixed(2);

    } else if (type === "kelvin") {
        let kVal = parseFloat(k.value);
        if (isNaN(kVal)) return (c.value = f.value = "");
        if (kVal < 0) return (error.innerText = "Kelvin can't be negative");
        c.value = (kVal - 273.15).toFixed(2);
        f.value = ((c.value * 9/5) + 32).toFixed(2);
    }

    navigator.vibrate?.(10);
}

function resetAll() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("kelvin-error").innerText = "";
}

/* DARK MODE */
document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
