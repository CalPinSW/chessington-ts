import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";


export default class Pawn extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        // Move one square up, Yet to add limitation on existing pieces.
        let currentPosition = board.findPiece(this);
        let movesAvailable = new MovesAvailable;
        if (this.player ==="WHITE") {
            movesAvailable.add(currentPosition.row + 1, currentPosition.col);
            if (currentPosition.row === 1){
                movesAvailable.add(currentPosition.row + 2, currentPosition.col);
            }
        }
        else {
            movesAvailable.add(currentPosition.row - 1, currentPosition.col);
            if (currentPosition.row === 6){
                movesAvailable.add(currentPosition.row - 2, currentPosition.col);
            }
        }
        return movesAvailable.list;
        //return new Array(0);
    }
}

