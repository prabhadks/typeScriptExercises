// Mock handlers -> Mock Responses for each endpoint

import { User, UserResponse, UserStatus } from "../src/types";

export const mockUsers: User[] = [
  { id: "1", name: "Alice", email: "alice@example.com", status: "active" as UserStatus  },
  { id: "2", name: "Bob", email: "bob@example.com", status: "inactive" as UserStatus },
];

export const mockGetAllUsers = (): User[] => mockUsers;

export const mockGetUserById = (id: string): User | undefined =>
  mockUsers.find((user) => user.id === id);

export const mockCreateUser = (request: Partial<User>): UserResponse => ({
  message: "User created successfully",
  data: { id: "3", ...request} as User,
});

export const mockUpdateUser = (id: string, request: Partial<User>): UserResponse => ({
  message: "User updated successfully",
  data: { id, ...request } as User,
});

export const mockPatchUserStatus = (id: string, status: UserStatus): UserResponse => {
  const user = mockUsers.find((user) => user.id === id);
  return {
    message: "User status updated",
    data: { ...(user || {}), status } as User,
  };
};
