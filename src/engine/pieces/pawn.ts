import Piece from './piece';
import Board from "../board";
import Player, {
    getForwardDirection,
    getForwardLeftDirection,
    getForwardRightDirection,
    getLeftDirection, getRightDirection
} from "../player";
import MovesAvailable from "./movesAvailable";
import Direction from "./direction";
import gameSettings from "../gameSettings";
import player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    enPessantAllowed : boolean = false;

    constructor(player: Player) {
        super(player);
    }

    updateEnPassant(fromSquare: Square, toSquare: Square){
        if (Math.abs(fromSquare.row - toSquare.row) === 2){
            this.enPessantAllowed = true;
        }
    }

    getAvailableMoves(board: Board) {
        // Move one square up, Yet to add limitation on existing pieces.
        let startRow = this.player === Player.WHITE ? 1 : gameSettings.BOARD_SIZE - 2;
        return [...this.getForwardMoves(board, startRow).list, ...this.getDiagonalMoves(board).list, ...this.getEnPassantMoves(board).list]

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

    getEnPassantMoves (board: Board) : MovesAvailable{
        let EnPassantMoves : MovesAvailable = new MovesAvailable();
        let maybePawn : Piece | undefined;
        maybePawn = board.getPiece(this.square(board).offset(getLeftDirection(this.player)))
        if (maybePawn instanceof Pawn){
            if (maybePawn.enPessantAllowed) {
                EnPassantMoves.addSquare(this.square(board).offset(getForwardLeftDirection(this.player)))
            }
        }
        maybePawn = board.getPiece(this.square(board).offset(getRightDirection(this.player)))
        if (maybePawn instanceof Pawn){
            if (maybePawn.enPessantAllowed) {
                EnPassantMoves.addSquare(this.square(board).offset(getForwardRightDirection(this.player)))
            }
        }
        return EnPassantMoves;
    }
}

