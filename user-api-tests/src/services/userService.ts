// Contains actual API calls
import { apiClient } from "../client";
import {
  User,
  UserResponse,
  CreateUserRequest,
  UpdateUserRequest,
  PatchUserStatusRequest,
} from "../types";
import { endpoints } from "./endPoints";

//get All Users
export const getAllUsers = async (): Promise<User[]> => {
  const user = await apiClient.get<User[]>(endpoints.users);
  return user.data;
};

//create User
export const createUser = async (
  data: CreateUserRequest
): Promise<UserResponse> => {
  const response = await apiClient.post<UserResponse>(endpoints.users, data);
  return response.data;
};

//get User by Id
export const getUserById = async (id: string): Promise<User> => {
  const response = await apiClient.get<User>(endpoints.userById(id));
  return response.data;
};

//Update user
export const updateUserRequest = async (
  id: string,
  data: UpdateUserRequest
): Promise<UserResponse> => {
  const response = await apiClient.put<UserResponse>(endpoints.userById(id), data);
  return response.data;
};

// Patch user status (partial update)
export const patchUserStatus = async (
  id: string,
  userStatus: PatchUserStatusRequest
): Promise<UserResponse> => {
  const response = await apiClient.patch<UserResponse>(
    endpoints.userStatus(id),
    userStatus
  );
  return response.data;
};

// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  await apiClient.delete(endpoints.userById(id));
};
