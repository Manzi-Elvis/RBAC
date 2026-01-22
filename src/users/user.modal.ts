import { Role } from "../rbac/roles.js";

export interface User {
  id: string;
  email: string;
  role: Role;
}
export interface CreateUserDTO {
  email: string;
  password: string;
  role: Role;
}
export interface UpdateUserDTO {
  email?: string;
  password?: string;
  role?: Role;
}
export interface UserResponseDTO {
      id: string;
      email: string;
      role: Role;
}