import { test, expect } from "@playwright/test";
import { ApiHelper } from "../utils/ApiHelper";

test("POST Request using ApiHelper", async ({ request }) => {
  // Create ApiHelper object
  const api = new ApiHelper(request);

  // Request body
  const userData = {
    name: "Parth",
    job: "QA Engineer",
  };

  // Send POST request
  const response = await api.post(
    "/users",
    userData,
  );

  // Verify status code
  expect(response.status()).toBe(201);

  // Read response
  const responseBody = await response.json();

  console.log(responseBody);

  // Verify response
  expect(responseBody.name).toBe(userData.name);

  expect(responseBody.job).toBe(userData.job);
});
