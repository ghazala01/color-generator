const outputs = document.getElementById("outputs");
const output = document.getElementById("output");

const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

const redColorValue = document.getElementById("valueOfRed");
const greenColorValue = document.getElementById("valueOfGreen");
const blueColorValue = document.getElementById("valueOfBlue");

const changeColor = () => {
    
    outputs.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    output.innerHTML = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    redColorValue.innerHTML = `${redSlider.value}`;
    greenColorValue.innerHTML = `${greenSlider.value}`;
    blueColorValue.innerHTML = `${blueSlider.value}`;

}
