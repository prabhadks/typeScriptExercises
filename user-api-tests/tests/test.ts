// Contains API tests using mocking
// userService.test.ts
import * as userService from "../src/services/userService";
import { apiClient } from "../src/client";
import * as mockHandler from "../mocks/mockHandler";
import { UserStatus } from "../src/types";

// 👇 Mock the entire module
jest.mock("../src/client", () => ({
  apiClient: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("userService with mocked apiClient", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // reset mocks before each test
  });

  test("getAllUsers returns users", async () => {
    (apiClient.get as jest.Mock).mockResolvedValue({
      data: mockHandler.mockGetAllUsers(),
    });

    const users = await userService.getAllUsers();
    expect(users).toEqual(mockHandler.mockUsers);
    expect(apiClient.get).toHaveBeenCalledWith("/users");
  });

  test("createUser returns correct response", async () => {
    const newUser = {
      name: "Charlie",
      email: "charlie@example.com",
      status: "active" as UserStatus,
    };
    const mockResponse = mockHandler.mockCreateUser(newUser);

    (apiClient.post as jest.Mock).mockResolvedValue({ data: mockResponse });

    const response = await userService.createUser(newUser);
    expect(response).toEqual(mockResponse);
    expect(apiClient.post).toHaveBeenCalledWith("/users", newUser);
  });

  test("getUserById returns a specific user", async () => {
    const mockUser = mockHandler.mockGetUserById("1");
    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockUser });

    const user = await userService.getUserById("1");
    expect(user).toEqual(mockUser);
    expect(apiClient.get).toHaveBeenCalledWith("/users/1");
  });

  test("updateUserRequest returns updated user", async () => {
    const updated = mockHandler.mockUpdateUser("2", { name: "Updated" });
    (apiClient.put as jest.Mock).mockResolvedValue({ data: updated });

    const response = await userService.updateUserRequest("2", {
      name: "Updated",
    });
    expect(response).toEqual(updated);
  });

  test("patchUserStatus returns updated status", async () => {
    const patched = mockHandler.mockPatchUserStatus("1", "inactive");
    (apiClient.patch as jest.Mock).mockResolvedValue({ data: patched });

    const response = await userService.patchUserStatus("1", {
      status: "inactive",
    });
    expect(response).toEqual(patched);
  });

  test("deleteUser completes without error", async () => {
    (apiClient.delete as jest.Mock).mockResolvedValue({}); // no data returned
    const response = await userService.deleteUser("1");
    expect(response).toBeUndefined();
    expect(apiClient.delete).toHaveBeenCalledWith("/users/1");
  });
});
