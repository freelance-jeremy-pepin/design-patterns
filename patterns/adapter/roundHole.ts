import RoundPeg from './roundPeg';

/**
 * Classe permettant de définir un trou rond.
 */
export default class RoundHole {
    private readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public fits(peg: RoundPeg): boolean {
        return peg.getRadius() <= this.radius;
    }
}
