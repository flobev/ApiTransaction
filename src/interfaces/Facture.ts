export interface FactureInterfaces {

    id_facture: number;
    date_facture: string;
    montant_ht: string;
    montant_ttc: string;
    source: string;
    creation: string;
    modification: string;
    save(): Promise < number >
}