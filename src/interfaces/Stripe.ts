export interface StripeInterfaces {

    carte_id_carte: number | null | undefined;
    id_stripe: number;
    save(): Promise < number >
}