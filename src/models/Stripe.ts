/* import MySQL from '../db/MySQL'; */
import Carte from "./Carte";
export default class Stripe {

    protected id_stripe : number;
    public id_carte: Carte;

    constructor(id_stripe: number, id_carte: Carte) {
        this.id_stripe = id_stripe;
        this.id_carte = id_carte;
    }

    get id(): number {
        return this.id_stripe;
    }
}