console.log("Hello World");
const inputDegree = document.getElementById("cel");
const degreeType = document.querySelector("select");
const result = document.getElementById("result");
console.log(result);


// setInterval(() => {
//     console.log(input);    
// }, 1000);
// inputDegree.addEventListener("keyup", (e) => {

//     if(inputDegree.value === NaN || inputDegree.value == NaN ) {
//         result.innerText = "°F";
//     }
//     if (degreeType.value == 'Celcius') {
//         result.innerHTML = (input * 1.8) + 32 + "°F";
//     }
// });

// setInterval(() => {
//     const input = parseFloat(inputDegree.value);
//     inputDegree.value;
//     if (result.innerHTML == "NaN°F") {
//         result.innerHTML = "°F";
//     }
//     if (degreeType.value == 'Celcius')
//         result.innerHTML = (input * 1.8) + 32 + "°F";
// }, 200);

function tempChange(number) {
    let floatInput = parseFloat(number);
    if (!isNaN(floatInput)) {
        if (degreeType.value == 'Celcius') {
            result.innerHTML = (floatInput * 1.8) + 32 + '°F';
        }
        else if (degreeType.value == 'Fahrenheit') {
            result.innerHTML = (floatInput - 32) * (5 / 9) + "°C";
        }
    }
    else {
        if (degreeType.value == 'Celcius')
            result.innerHTML = '°F';
        else if (degreeType.value == 'Fahrenheit')
            result.innerHTML = "°C";
    }
}