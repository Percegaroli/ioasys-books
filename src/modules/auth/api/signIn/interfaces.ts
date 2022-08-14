export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponseDTO {
  id: string;
  name: string;
  birthdate: string;
  gender: string;
}
