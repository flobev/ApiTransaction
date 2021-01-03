/* import MySQL from '../db/MySQL'; */
export default class Carte {

    protected id_carte : number;
    public numero_carte: string | null;
    public mois: string | null;
    public annee: string | null;
    public defaut: string | null;
    public id_utilisateur: number;

    constructor(id: number, numero_carte: string = '', mois: string = '', annee: string = '', defaut: string = '', id_utilisateur: number) {
        this.id_carte = id;
        this.numero_carte = (numero_carte === undefined) ? null : numero_carte;
        this.mois = (mois === undefined) ? null : mois;
        this.annee = (annee === undefined) ? null : annee;
        this.defaut = (defaut === undefined) ? null : defaut;
        this.id_utilisateur = id_utilisateur;
    }

    get id(): number {
        return this.id_carte;
    }

    get carte_number(): string {
        return (this.numero_carte === null) ? '' : this.numero_carte;
    }

    get month(): string {
        return (this.mois === null) ? '' : this.mois;
    }

    get year(): string {
        return (this.annee === null) ? '' : this.annee;
    }

    get default(): string {
        return (this.defaut === null) ? '' : this.defaut;
    }
}