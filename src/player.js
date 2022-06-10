import gameBoard from "./gameBoard"

const Player = (name) => {
    const board = gameBoard();
    const newBoard = () => board.getBoard();

    const getName = () => {
        return name
    }
    const isMyTurn = true

    return { newBoard, getName, isMyTurn }
}

const computer = () => {
    const board = gameBoard();
    const computerBoard = () => board.getBoard()

    const randomShot = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min);
    }

    //should  not shot at the same spot



    return { computerBoard, randomShot }

}
export { Player, computer }