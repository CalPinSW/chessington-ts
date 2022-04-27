import Square from "../square";

export default class MovesAvailable {
    list: Square[] = [];

    add(row: number, col: number) {
        this.list.push(Square.at(row, col));
    }
}