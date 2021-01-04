import { UtilisateurInterfaces } from './Utilisateur';

export interface EnfantInterfaces extends UtilisateurInterfaces {
    
    personne_idpersonne: number | null | undefined;
    id_enfant: number;
    save(): Promise < number >
}