import Piece from './piece';
import Board from "../board";
import Player, {getForwardDirection, getForwardLeftDirection, getForwardRightDirection} from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";
import gameSettings from "../gameSettings";
import player from "../player";

export default class Pawn extends Piece {
    enPessantAllowed : boolean = true;

    constructor(player: Player) {
        super(player);
    }

    getAvailableMoves(board: Board) {
        // Move one square up, Yet to add limitation on existing pieces.
        let startRow : number;

        startRow = this.player === Player.WHITE ? 1 : gameSettings.BOARD_SIZE - 2;
        return [...this.getForwardMoves(board, startRow).list, ...this.getDiagonalMoves(board).list]

    }

    getForwardMoves (board: Board, startRow : number) : MovesAvailable {
        let forwardMoves : MovesAvailable = new MovesAvailable();
        const forward = getForwardDirection(this.player);
        if (this.square(board).offset(forward).isEmptySquare(board)){
            forwardMoves.add(this.getRow(board) + forward.rowOffset, this.getCol(board));
            if (this.getRow(board) === startRow){
                if (this.square(board).offset(forward).offset(forward).isEmptySquare(board)){
                    forwardMoves.addSquare(this.square(board).offset(forward).offset(forward));
                }
            }

        }
        return forwardMoves
    }

    getDiagonalMoves (board: Board) : MovesAvailable{
        let diagonalMoves : MovesAvailable = new MovesAvailable();
        const forwardRight = getForwardRightDirection(this.player);
        if (this.square(board).offset(forwardRight).isTakeable(board,this.player)){
            diagonalMoves.addSquare(this.square(board).offset(forwardRight));
        }
        const forwardLeft = getForwardLeftDirection(this.player);
        if (this.square(board).offset(forwardLeft).isTakeable(board,this.player)){
            diagonalMoves.addSquare(this.square(board).offset(forwardLeft));
        }
        return diagonalMoves;
    }
}

