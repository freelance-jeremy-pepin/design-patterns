import Ship from './ship';
import Transport from './transport';
import TransportFactory from './transportFactory';

/**
 * Fabrique permettant de créer un bateau.
 * Cette classe override la méthode createTransport qui permet de retourner un objet de type Ship.
 */
export default class ShipFactory extends TransportFactory {
    public createTransport(): Transport {
        return new Ship();
    }
}
