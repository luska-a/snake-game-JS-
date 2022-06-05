/* ======================================================================================================================= */
/* ======================================================================================================================= */
/* ============================================= ARQUIVO QUE FAZ O JOGO RODAR ============================================= */
/* ======================================================================================================================= */
/* ======================================================================================================================= */

/* ======================================================= IMPORTS ======================================================= */
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

/* ================================================= VARIÁVEIS/CONSTANTES ================================================= */

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

/* ==================================================== MAIN FUNCTION ==================================================== */
function main(currentTime) {
    if (gameOver) {
        if (confirm('Você perdeu! Pressione Ok para jogar novamente:')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = ( (currentTime - lastRenderTime) / 1000 )
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()

}

window.requestAnimationFrame(main)

/* ============ Função de atualização da cobra, comida e checkar morte(mais info de checkar morte na linha 46) ============ */
function update() {
    updateSnake() 
    updateFood()
    checkDeath()
}

/* ========================== Funções de desenhar a cobra e a comida no tabuleiro do jogo (grid) ========================== */
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

/* ========================= Função de checkar se bateu nas bordas ou se bateu no corpo da cobra ========================= */
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}