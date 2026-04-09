export interface AddressDTO {
    zipCode: string;
    addressLine: string;
    addressLineNumber: string;
    neighborhood: string;
    city: string;
    state: string;
  }
  
  export interface PersonDTO {
    firstName: string;
    lastName: string;
    cpf: string;
    birthDate: string;
    phone: string;
    address: AddressDTO;
  }
  
  export interface SaveUserDTO {
    mail: string;
    password: string;
    image?: string;
    person: PersonDTO;
  }
  