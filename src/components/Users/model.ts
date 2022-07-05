export interface IUserInterface {
  address: IUserInterfaceAddress;
  company: IUserInterfaceCompany;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface IUserInterfaceAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: "92998-3874";
  geo: IUserInterfaceAddressGeo;
}
interface IUserInterfaceAddressGeo {
  lat: string;
  lng: string;
}
interface IUserInterfaceCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
