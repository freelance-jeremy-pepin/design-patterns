import Transport from './transport';
import TransportFactory from './transportFactory';
import Truck from './truck';

/**
 * Fabrique permettant de créer un camion.
 * Cette classe override la méthode createTransport qui permet de retourner un objet de type Truck.
 */
export default class TruckFactory extends TransportFactory {
    public createTransport(): Transport {
        return new Truck();
    }
}
