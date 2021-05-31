const header1 = () => document.getElementById("header1")
const startButton = () => document.getElementById("start-button")


//GameBoard
const canvas = () => document.getElementById("canvas")
const ctx = canvas().getContext('2d');
const square = 100;
const gameBoard = [];