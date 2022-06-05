/* ======================================================================================================================= */
/* ======================================================================================================================= */
/* ======================================= CONFIGURAÇÕES DO TABULEIRO DO JOGO(grid) ======================================= */
/* ======================================================================================================================= */
/* ======================================================================================================================= */

/* ================================================= VARIÁVEIS/CONSTANTES ================================================= */
const GRID_SIZE = 21

/* =================== Função de fazer a comida aparecer em um lugar aleatório sempre que a cobra come =================== */
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

/* ==================== Função para detectar se a cabeça da cobra bateu nas bordas do tabuleiro(grid) ==================== */
export function outsideGrid(position) {
    return (position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE)
}