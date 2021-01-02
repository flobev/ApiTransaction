export interface UserInterfaces {
  iduser?: number;
  firstname?: string;
  lastname?: string;
  dateNaiss?: any;
  email?: string;
  sexe?: string;
  role?: string;
  createdAt?: any;
  updateAt?: any;
  subscription?: number;
  save(): Promise<number>;
}
