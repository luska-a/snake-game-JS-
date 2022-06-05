/* ======================================================================================================================= */
/* ======================================================================================================================= */
/* ================================================ CONFIGURAÇÕES DA COBRA ================================================ */
/* ======================================================================================================================= */
/* ======================================================================================================================= */

/* ======================================================= IMPORTS ======================================================= */
import { getInputDirection } from "./input.js"

/* ================================================= VARIÁVEIS/CONSTANTES ================================================= */
export const SNAKE_SPEED = 15 // Velocidade da cobra
const snakeBody = [ { x: 11, y: 11 } ]
let newSegments = 0 // Tamanho quando ela comer

/* ================================================ Função de atualização ================================================ */
export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i --) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

/* ================================================== Função de desenhar ================================================== */
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

/* =================================== Função de ao comer, aumentar o tamanho da cobra =================================== */
export function expandSnake(amount) {
    newSegments += amount
}

/* ================================= Função de constar se a cobra bateu no próprio corpo ================================= */
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

/* ========================= Função da cabeça da cobra, caso ela bata no próprio corpo, game over ========================= */
export function getSnakeHead() {
    return snakeBody[0]
}

/* ========================= Função da cabeça da cobra, caso ela bata no próprio corpo, game over ========================= */
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

/* ============================= Função de aumentar o tamanho da cobra quando ela come comida ============================= */
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}