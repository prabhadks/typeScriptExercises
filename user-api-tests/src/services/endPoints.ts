export const endpoints = {
  users: "/users",
  userById: (id: string) => `/users/${id}`,
  userStatus: (id: string) => `/users/${id}/status`,
};