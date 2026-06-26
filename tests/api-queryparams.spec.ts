import { test, expect } from "@playwright/test";

test("GET Comments using Query Parameters", async ({ request }) => {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const response = await request.get(url, {
    params: {
      postId: 1,
    },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody);

  expect(responseBody.length).toBeGreaterThan(0);

  expect(responseBody[0].postId).toBe(1);

  console.log("First Comment");

  console.log(responseBody[0]);
});
