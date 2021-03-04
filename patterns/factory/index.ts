import ShipFactory from './shipFactory';
import TransportFactory from './transportFactory';
import TruckFactory from './truckFactory';

function clientCode(transportFactory: TransportFactory) {
    console.log(transportFactory.deliver());
}

clientCode(new TruckFactory());
clientCode(new ShipFactory());
