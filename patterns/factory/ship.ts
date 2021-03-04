import Transport from './transport';

/**
 * Classe bateau implémentant l'interface Transport.
 */
export default class Ship implements Transport {
    public deliver(): string {
        return 'Deliver with a ship !';
    }
}
