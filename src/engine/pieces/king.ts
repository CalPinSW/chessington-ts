import Piece from './piece';
import Board from "../board";
import Player from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";
import Square from "../square";

export default class King extends Piece {
    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        let movesAvailable = new MovesAvailable;
        for (let rowOffset = -1; rowOffset <= 1; rowOffset++){
            for (let colOffset = -1; colOffset <= 1; colOffset++){
                if (board.findPiece(this).offset(Direction.Custom(rowOffset,colOffset)).isNotOccupiedBySamePlayerPieceOrKing(board, this.player)){
                    movesAvailable.addSquare(board.findPiece(this).offset(Direction.Custom(rowOffset,colOffset)))
                }
            }
        }

        return  movesAvailable.list;
    }


}
