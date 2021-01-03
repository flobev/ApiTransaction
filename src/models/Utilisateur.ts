/* import MySQL from '../db/MySQL'; */
export default class Utilisateur {

    protected id_utilisateur?: number | null;
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

    protected table: string = 'utilisateur';

    /**
     * Creates an instance of Utilisateur.
     * @param {(Utilisateur(instance) | null)} id
     * @param {string} [nom]
     * @param {string} [prenom]
     * @param {string} [email]
     * @param {string} [mdp]
     * @param {string} [sexe]
     * @param {string} [date_naissance]
     * @param {string} [role='']
     * @param {string} [creation='']
     * @param {string} [modification='']
     * @param {string} [abonnement='']
     * @memberof Utilisateur
     */

    constructor(utilisateur: Utilisateur | null, nom: string, prenom: string, email: string, mdp: string, sexe: string, date_naissance: string, role: string = '', creation: string = '', modification: string = '', abonnement: string = ''){
        if (utilisateur === null) {
            this.nom = nom.toUpperCase().trim();;
            this.prenom = prenom.toLowerCase().trim();
            this.email = email;
            this.mdp = mdp;
            this.sexe = sexe;
            this.date_naissance = date_naissance;
            this.role = (role === undefined) ? null : role;
            this.creation = (creation === undefined) ? null : creation;
            this.modification = (modification === undefined) ? null : modification;
            this.abonnement = (abonnement === undefined) ? null : abonnement;
        } else {
            this.nom = utilisateur.nom;
            this.prenom = utilisateur.prenom;
            this.email = utilisateur.email;
            this.mdp = utilisateur.mdp;
            this.sexe = utilisateur.sexe;
            this.date_naissance = utilisateur.date_naissance;
            this.role = (utilisateur.role === undefined) ? null : utilisateur.role;
            this.creation = (utilisateur.creation === undefined) ? null : utilisateur.creation;
            this.modification = (utilisateur.modification === undefined) ? null : utilisateur.modification;
            this.abonnement = (utilisateur.abonnement === undefined) ? null : utilisateur.abonnement;
            this.id_utilisateur = utilisateur.id;
        }
    }

    get id(): number {
        return <number > this.id_utilisateur;
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


    get attributInsert(): Array < string > {
        return ['nom', 'prenom', 'email', 'mdp', 'sexe', 'role', 'date_naissance', 'creation', 'modification', 'abonnement']
    }


    /**
     *
     * Save to the property in database
     * @returns {Promise < number >}
     * @memberof Personne
     */
    /* save(): Promise < number > {
        return new Promise((resolve, reject) => {
            MySQL.insert(this.table, this).then((id: number) => {
                this.idpersonne = id;
                console.log(`Save ${this.table}`);
                resolve(id)
            }).catch((err) => {
                console.log(err);
                reject(false)
            })
        })
    };  */
}