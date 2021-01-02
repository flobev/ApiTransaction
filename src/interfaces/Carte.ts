export interface UserInterfaces {
  idcarte?: number;
  numeroCarte?: number;
  mois?: number;
  annee?: number;
  default?: number;
  utilisateurIdUtilisateur?: number;
  save(): Promise<number>;
}
