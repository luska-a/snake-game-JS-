/* ======================================================================================================================= */
/* ======================================================================================================================= */
/* =============================================== CONFIGURAÇÕES DA COMIDA =============================================== */
/* ======================================================================================================================= */
/* ======================================================================================================================= */

import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

/* ================================================= VARIÁVEIS/CONSTANTES ================================================= */
let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

/* ================================================ Função de atualização ================================================ */
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

/* ================================ Função de desenhar a comida no tabuleiro do game(grid) ================================ */
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

/* === Função de retornar um lugar aleatório quando a cobra come a comida(info da função no arquivo grid.js, linha 10) === */
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}