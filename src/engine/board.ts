import Player, {getForwardLeftDirection, getForwardRightDirection, getLeftDirection, getRightDirection} from './player';
import GameSettings from './gameSettings';
import Square from './square';
import Piece from "./pieces/piece";
import Pawn from "./pieces/pawn";

export default class Board {
    private readonly board: (Piece | undefined)[][];
    private currentPlayer: Player;

    constructor(currentPlayer?: Player) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square: Square, piece: Piece | undefined) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square: Square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind: Piece) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare: Square, toSquare: Square) {
        const movingPiece = this.getPiece(fromSquare);
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.resetEnPassantSettings();
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            if (movingPiece instanceof Pawn){
                movingPiece.updateEnPassant(fromSquare, toSquare);
                this.takeOnEnPessant(fromSquare, toSquare);
            }
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }
    takeOnEnPessant(fromSquare: Square, toSquare : Square){
        if (toSquare.equals(fromSquare.offset(getForwardRightDirection(this.currentPlayer)))){
            this.setPiece(fromSquare.offset(getRightDirection(this.currentPlayer)), undefined);
        }
        if (toSquare.equals(fromSquare.offset(getForwardLeftDirection(this.currentPlayer)))){
            this.setPiece(fromSquare.offset(getLeftDirection(this.currentPlayer)), undefined);
        }
    }

    resetEnPassantSettings(){
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                let maybePawn = this.getPiece(Square.at(row,col));
                if (maybePawn instanceof Pawn) {
                    maybePawn.enPessantAllowed = false;
                }
            }
        }
    }
}
