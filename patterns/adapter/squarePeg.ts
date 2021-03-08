/**
 * Classe permettant de définir un parallélépipède rectangle.
 */
export default class SquarePeg {
    private readonly width: number;

    constructor(width: number) {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }
}
