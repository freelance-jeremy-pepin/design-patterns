import RoundHole from './roundHole';
import RoundPeg from './roundPeg';
import SquarePeg from './squarePeg';
import SquarePegAdapter from './squarePegAdapter';

const roundHole = new RoundHole(5);
const smallRoundPeg = new RoundPeg(5);
const largeRoundPeg = new RoundPeg(10);

// Cas classique : un cylindre peut rentrer dans un trou de forme ronde ?
console.log(`Small round peg fits round hole ? ${roundHole.fits(smallRoundPeg)}`);
console.log(`Large round peg fits round hole ? ${roundHole.fits(largeRoundPeg)}`);

// Cas impossible sans adaptateur : un parallélépipède rectangle peut -il rentrer dans un trou de forme ronde ?
const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);

// Ceci ne fonctionne pas car RoundHole.fit() attend un RoundPeg en paramètre.
// --> roundHole.fits(squarePeg); <-- ERROR : TS2345: Argument of type 'SquarePeg' is not assignable to parameter of type 'RoundPeg'.

// On se sert donc de l'adaptateur.
const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);

console.log(`Small square peg fits round hole ? ${roundHole.fits(smallSquarePegAdapter)}`);
console.log(`Large square peg fits round hole ? ${roundHole.fits(largeSquarePegAdapter)}`);
