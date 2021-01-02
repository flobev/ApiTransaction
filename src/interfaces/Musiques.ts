export interface UserInterfaces {
  idMusique?: number;
  name?: string;
  url?: string;
  cover?: string;
  time?: string;
  createdAt?: any;
  updateAt?: any;
  type?: number;
  utilisateurIdUtilisateur?: number;
  save(): Promise<number>;
}
