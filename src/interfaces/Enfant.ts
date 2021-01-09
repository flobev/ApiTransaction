import { UtilisateurInterfaces } from './Utilisateur';

export interface EnfantInterfaces extends UtilisateurInterfaces {
    
    utilisateur_id_utilisateur: number | null | undefined;
    id_enfant: number;
    save(): Promise < number >
}