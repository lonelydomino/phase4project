const header1 = () => document.getElementById("header1")
const startButton = () => document.getElementById("start-button")
const heroCollection = () => document.getElementById("hero-collection")

document.addEventListener("DOMContentLoaded", () => {
    startButton().addEventListener("click", handleClick)
})

const handleClick = () => {
    fetch('http://localhost:3000/heros')
    .then(response => response.json())
    .then(json => renderHeroCollection(json))
    .catch(err => console.log(err))
}
const renderHeroCollection = (jsonData) => {
    jsonData.forEach(element => {
        const li = document.createElement("li")
        li.innerHTML = `
        <h1 class="hero-name">${element.name}</h1>
        <h2 class="hero-level">Level: ${element.level}</h2>
        <p class="hero-experience">Exp: ${element.experience} </p>
        <p class="hero-attack">Attack: ${element.attack} </p>
        <p class="hero-defense">Defense: ${element.defense} </p>
        `
        heroCollection().appendChild(li)

    })
}