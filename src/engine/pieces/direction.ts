export default class Direction {
    rowOffset: number = 0;
    colOffset: number = 0;

    private constructor(rowOffset: number, colOffset: number) {
        this.rowOffset = rowOffset;
        this.colOffset = colOffset;
    }

    static up(): Direction {
        return new Direction(1, 0);
    }
    static down(): Direction {
        return new Direction(-1, 0);
    }
    static left(): Direction {
        return new Direction(0, -1);
    }
    static right(): Direction {
        return new Direction(0, 1);
    }
    static NE(): Direction {
        return new Direction(1, 1);
    }
    static SE(): Direction {
        return new Direction(-1, 1);
    }

    static SW(): Direction {
        return new Direction(-1, -1);
    }
    static NW(): Direction {
        return new Direction(1, -1);
    }
    static Custom(rowOffset:number, colOffset: number): Direction {
        return new Direction(rowOffset, colOffset);
    }

    set (rowOffset: number, colOffset: number){
        this.rowOffset = rowOffset
        this.colOffset = colOffset
    }
    up () {
        this.rowOffset = 1;
        this.colOffset = 0;
    }
    down () {
        this.rowOffset = -1;
        this.colOffset = 0;
    }
    left () {
        this.rowOffset = 0;
        this.colOffset = -1;
    }
    right () {
        this.rowOffset = 0;
        this.colOffset = 1;
    }
    NE () {
        this.rowOffset = 1;
        this.colOffset = 1;
    }
    SE () {
        this.rowOffset = -1;
        this.colOffset = 1;
    }
    SW () {
        this.rowOffset = -1;
        this.colOffset = -1;
    }
    NW () {
        this.rowOffset = 1;
        this.colOffset = -1;
    }
}