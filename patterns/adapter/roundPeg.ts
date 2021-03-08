/**
 * Classe permettant de définir un cylindre.
 */
export default class RoundPeg {
    private readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }
}
