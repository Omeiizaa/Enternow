export interface IStaff {
  name: string;
  id: number;
  email: string;
  username: string;
  address: IAddres;
  phone: number;
  website: string;
  company: ICompany;
}
export interface IAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: IGeo;
}

export interface IGeo {
  lat: number;
  lng: number;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
