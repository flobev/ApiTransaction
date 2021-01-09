/* import MySQL from '../db/MySQL'; */
export default class Utilisateur {

    protected id_utilisateur ? : number | null;
    public nom: string | null;
    public prenom: string | null;
    public email: string | null;
    public mdp: string | null;
    public sexe: string | null;
    public date_naissance: string | null;
    public role?: string;
    public creation?: string;
    public modification?: string;
    public abonnement?: string;

    protected table: string = 'utilisateur';

    /**
     * Creates an instance of Utilisateur.
     * @param {(Utilisateur(instance) | null)} id
     * @param {string} [nom='']
     * @param {string} [prenom='']
     * @param {string} [email='']
     * @param {string} [mdp='']
     * @param {string} [sexe='']
     * @param {string} [date_naissance='']
     * @param {string} [role]
     * @param {string} [creation]
     * @param {string} [modification]
     * @param {string} [abonnement]
     * @memberof Utilisateur
     */

    constructor(utilisateur: Utilisateur | null, l_name: string = '', f_name: string = '', mail: string = '', password: string = '', sexe: string = '', date_birth: string = '', role ? : string, created_at ? : string, update_at ? : string, sub ? : string){
        if (utilisateur === null) {
            this.nom = l_name.toUpperCase().trim();;
            this.prenom = f_name.toLowerCase().trim();
            this.email = mail;
            this.mdp = password;
            this.sexe = sexe;
            this.date_naissance = date_birth;
            this.role = role;
            this.creation = created_at;
            this.modification = update_at;
            this.abonnement = sub;
        } else {
            this.nom = utilisateur.nom;
            this.prenom = utilisateur.prenom;
            this.email = utilisateur.email;
            this.mdp = utilisateur.mdp;
            this.sexe = utilisateur.sexe;
            this.date_naissance = utilisateur.date_naissance;
            this.role = utilisateur.role;
            this.creation = utilisateur.creation;
            this.modification = utilisateur.modification;
            this.abonnement = utilisateur.abonnement;
            this.id_utilisateur = utilisateur.id;
        }
    }

    /************************* GETTER *************************/

    get id(): number {
        return <number> this.id_utilisateur;
    }

    get lastName(): string {
        return <string> this.nom;
    }

    get firtsName(): string {
        return <string> this.prenom;
    }

    get mail(): string {
        return <string> this.email;
    }

    get password(): string {
        return <string> this.mdp;
    }

    get gender(): string {
        return <string> this.sexe;
    }

    get birth(): string {
        return <string> this.date_naissance;
    }

    get assignement(): string {
        return <string> this.role;
    }

    get createAt(): string {
        return <string> this.creation;
    }

    get updateAt(): string {
        return <string> this.nom;
    }

    get subscription(): string {
        return <string> this.nom;
    }


    /* get attributInsert(): Array < string > {
        return ['nom', 'prenom', 'email', 'mdp', 'sexe', 'role', 'date_naissance', 'creation', 'modification', 'abonnement']
    } */


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