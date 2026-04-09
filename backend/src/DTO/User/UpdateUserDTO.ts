interface AddressDTO {
  zipCode?: string;
  addressLine?: string;
  addressLineNumber?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

interface PersonDTO {
  firstName?: string;
  lastName?: string;
  cpf?: string;
  birthDate?: string;
  phone?: string;
  address?: AddressDTO;
}

export interface UpdateUserDTO {
  mail: string;
  password?: string;
  image?: string;
  person?: PersonDTO;

  isActive?: boolean;
}
