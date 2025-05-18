🎯 Goal:
Create a clean and scalable project structure to test a mock API supporting CRUD operations for a User Management System.

# User Service API with Mock Handlers and Tests

This project provides a structured user service layer with complete CRUD operations using a RESTful pattern. It also includes mock implementations and Jest-based unit tests for testing all endpoints without a real backend.

---

## 🚀 Project Features

- API abstraction using Axios (`apiClient`)
- Full CRUD operations:
  - `getAllUsers`
  - `getUserById`
  - `createUser`
  - `updateUserRequest`
  - `patchUserStatus`
  - `deleteUser`
- Mock responses via `mockHandler.ts`
- Fully tested with Jest and mocked Axios calls

---

## 📁 Project Structure

src/
│
├── client.ts # Axios API client setup
├── services/
│ └── userService.ts # All user-related API functions
│
├── mocks/
│ └── mockHandler.ts # Functions returning mock responses
│
├── types/
│ └── index.ts # TypeScript interfaces and types
│
└── tests/
└── userService.test.ts # Jest tests with mocked axios


---

## 🧪 Test Coverage

All service functions are unit tested using Jest. Axios is mocked to simulate real API calls.

Run tests:

```bash
npm test


Or with Coverage:
npm run test -- --coverage

🛠 Technologies Used
TypeScript

Axios

Jest

ts-jest

Mocked API responses (no real backend required)


🧩 Sample API Endpoints Used

| Operation         | Method | Endpoint            |
| ----------------- | ------ | ------------------- |
| Get All Users     | GET    | `/users`            |
| Get User by ID    | GET    | `/users/:id`        |
| Create User       | POST   | `/users`            |
| Update User       | PUT    | `/users/:id`        |
| Patch User Status | PATCH  | `/users/:id/status` |
| Delete User       | DELETE | `/users/:id`        |


Note: All endpoints are simulated via mocks for testing purposes.

🧑‍💻 Example Usage

import { createUser } from "./services/userService";

const newUser = {
  name: "Charlie",
  email: "charlie@example.com",
  status: "active"
};

const created = await createUser(newUser);
console.log(created);

📌 Notes
This project is great for testing service-layer logic without relying on a live backend.
