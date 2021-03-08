import RoundPeg from './roundPeg';
import SquarePeg from './squarePeg';

/**
 * Adaptateur permettant d'adapter un parallélépipède rectangle en un cylindre.
 */
export default class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg;

    constructor(peg: SquarePeg) {
        super(0);
        this.peg = peg;
    }

    public getRadius(): number {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }
}
