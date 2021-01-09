/* import MySQL from '../db/MySQL'; */
import Stripe from "./Stripe";
export default class Facture {

    protected id_facture : number;
    public date_facture: string | null;
    public montant_ht: string | null;
    public montant_ttc: string | null;
    public source: string | null;
    public creation: string | null;
    public modification: string | null;
    public id_stripe: Stripe;

    constructor(id: number, date_facture: string = '', montant_ht: string = '', montant_ttc: string = '', source: string = '', creation: string = '', modification: string = '', id_stripe: Stripe) {
        this.id_facture = id;
        this.date_facture = (date_facture === undefined) ? null : date_facture;
        this.montant_ht = (montant_ht === undefined) ? null : montant_ht;
        this.montant_ttc = (montant_ttc === undefined) ? null : montant_ttc;
        this.source = (source === undefined) ? null : source;
        this.creation = (creation === undefined) ? null : creation;
        this.modification = (source === undefined) ? null : modification;
        this.id_stripe = id_stripe;
    }

    get id(): number {
        return this.id_facture;
    }

    get bill_date(): string {
        return (this.date_facture === null) ? '' : this.date_facture;
    }

    get amount_ht(): string {
        return (this.montant_ht === null) ? '' : this.montant_ht;
    }

    get amount_ttc(): string {
        return (this.montant_ttc === null) ? '' : this.montant_ttc;
    }

    get destination(): string {
        return (this.source === null) ? '' : this.source;
    }

    get created_at(): string {
        return (this.creation === null) ? '' : this.creation;
    }

    get updated_at(): string {
        return (this.modification === null) ? '' : this.modification;
    }
}