/* import MySQL from '../db/MySQL'; */
import Utilisateur from "./Utilisateur";
export default class Musique {

    protected id_musique : number;
    public nom: string | null;
    public lien: string | null;
    public couverture: string | null;
    public temps: string | null;
    public creation: string | null;
    public modification: string | null;
    public type: string | null;
    public id_utilisateur: Utilisateur;

    constructor(id_musique: number, nom: string = '', lien: string = '', couverture: string = '', temps: string = '', creation: string = '', modification: string = '', type: string = '', id_utilisateur: Utilisateur) {
        this.id_musique = id_musique;
        this.nom = (nom === undefined) ? null : nom;
        this.lien = (lien === undefined) ? null : lien;
        this.couverture = (couverture === undefined) ? null : couverture;
        this.temps = (temps === undefined) ? null : temps;
        this.creation = (creation === undefined) ? null : creation;
        this.modification = (modification === undefined) ? null : modification;
        this.type = (type === undefined) ? null : type;
        this.id_utilisateur = id_utilisateur;
    }

    get id(): number {
        return this.id_musique;
    }

    get name(): string {
        return (this.nom === null) ? '' : this.nom;
    }

    get url(): string {
        return (this.lien === null) ? '' : this.lien;
    }

    get cover(): string {
        return (this.couverture === null) ? '' : this.couverture;
    }

    get time(): string {
        return (this.temps === null) ? '' : this.temps;
    }

    get create_at(): string {
        return (this.creation === null) ? '' : this.creation;
    }

    get update_at(): string {
        return (this.modification === null) ? '' : this.modification;
    }

    get types(): string {
        return (this.type === null) ? '' : this.type;
    }
}