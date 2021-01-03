export default class Utilisateur {

    private id_utilisateur: number;
    private nom: string;
    private prenom: string;
    private email: string;
    private mdp: string;
    private sexe: string;
    private date_naissance: string;
    private role: string | null;
    private creation: string | null;
    private modification: string | null;
    private abonnement: string | null;

    constructor(id_utilis: number, nom: string, prenom: string, email: string, mdp: string, sexe: string, date_naissance: string, role?: string, creation?: string, modification?: string, abonnement?: string){
        this.id_utilisateur = id_utilis;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.mdp = mdp;
        this.sexe = sexe;
        this.date_naissance = date_naissance;
        this.role = (role === undefined) ? null : role;
        this.creation = (creation === undefined) ? null : creation;
        this.modification = (modification === undefined) ? null : modification;
        this.abonnement = (abonnement === undefined) ? null : abonnement;
    }

    get id(): number {
        return this.id_utilisateur;
    }

    get lastName(): string {
        return this.nom;
    }

    get firtsName(): string {
        return this.prenom;
    }

    get mail(): string {
        return this.email;
    }

    get password(): string {
        return this.mdp;
    }

    get gender(): string {
        return this.sexe;
    }

    get birth(): string {
        return this.date_naissance;
    }

    get assignement(): string {
        return (this.role === null) ? '' : this.role;
    }

    get createAt(): string {
        return (this.creation === null) ? '' : this.creation;
    }

    get updateAt(): string {
        return (this.nom === null) ? '' : this.nom;
    }

    get subscription(): string {
        return (this.nom === null) ? '' : this.nom;
    }

}