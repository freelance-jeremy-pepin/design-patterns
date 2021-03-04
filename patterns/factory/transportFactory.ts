import Transport from './transport';

/**
 * Fabrique permettant de créer un transport.
 */
export default abstract class TransportFactory {
    public abstract createTransport(): Transport;

    public deliver(): string {
        return this.createTransport().deliver();
    }
}
