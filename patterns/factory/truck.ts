import Transport from './transport';

/**
 * Classe camion implémentant l'interface Transport.
 */
export default class Truck implements Transport {
    public deliver(): string {
        return 'Deliver with a truck !';
    }
}
