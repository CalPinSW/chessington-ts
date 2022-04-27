import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";

export default class Queen extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        let movesAvailable = new MovesAvailable;
        for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
            for (let colOffset = -1; colOffset <= 1; colOffset++) {
                if (rowOffset !== 0 || colOffset !== 0){
                    this.addMoves(board, board.findPiece(this).offset(Direction.Custom(rowOffset,colOffset)), movesAvailable, Direction.Custom(rowOffset,colOffset));
                }
            }
        }
        return movesAvailable.list;
    }
}
