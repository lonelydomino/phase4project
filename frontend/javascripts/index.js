const header1 = () => document.getElementById("header1")
const startButton = () => document.getElementById("start-button")
const canvas = () => document.getElementById("canvas")
const context = () => canvas.getContext('2d');
// const heroCollection = () => document.getElementById("hero-collection")
const cell = 100;
const gameBoard = [];
document.addEventListener("DOMContentLoaded", () => {
    startButton().addEventListener("click", handleShowBoard)
})

const handleShowBoard = () => {
    canvas.width = 1000;
    canvas.height = 600;
}

// const handleShowHerosClick = () => {
//     fetch('http://localhost:3000/heros')
//     .then(response => response.json())
//     .then(json => renderHeroCollection(json))
//     .catch(err => console.log(err))
// }
// const renderHeroCollection = (jsonData) => {
//     jsonData.forEach(element => {
//         const li = document.createElement("li")
//         li.innerHTML = `
//         <h1 class="hero-name">${element.name}</h1>
//         <h2 class="hero-level">Level: ${element.level}</h2>
//         <p class="hero-experience">Exp: ${element.experience} </p>
//         <p class="hero-attack">Attack: ${element.attack} </p>
//         <p class="hero-defense">Defense: ${element.defense} </p>
//         `
//         heroCollection().appendChild(li)

//     })
// }