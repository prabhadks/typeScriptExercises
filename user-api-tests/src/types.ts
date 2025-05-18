//Request/response interfaces

export type UserStatus = "active" | "inactive" | "suspended";

export interface User {
    id: string;
    name: string;
    email: string;
    status: UserStatus;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  status?: UserStatus;
}

export interface UserResponse {
  data: User;
  message: string;
}

export type PatchUserStatusRequest = {
  status: UserStatus;
};