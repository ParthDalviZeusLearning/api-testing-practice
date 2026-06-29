import { test, expect } from "@playwright/test";
import { ApiHelper } from "../utils/ApiHelper";
import { UserAPI } from "../api/UserAPI";
import { request } from "node:http";
import { User } from "../models/User";
let userApi: UserAPI;

test.describe("User API Tests", () => {
  test.beforeEach(async ({ request }) => {
    const apiHelper = new ApiHelper(request);

    userApi = new UserAPI(apiHelper);
  });

  test("Get User using UserAPI", async ({ request }) => {
    const response = await userApi.getUser(1);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.id).toBe(1);
  });

  test("Create User", async ({ request }) => {
    const user: User = {
       name: "Parth Dalvi",
       username: "ParthQA",
       email: "parth@22",
    };

    const response = await userApi.createUser(user);

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe(user.name);

    expect(responseBody.username).toBe(user.username);
  });

  test("Update User", async ({ request }) => {
    const updatedUser: User  = {
      name: "Parth Dalvi",
      username: "parthQA",
      email: "parth@22",
    };

    const response = await userApi.updateUser(1, updatedUser);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log("\n=======Updated User======");

    console.log(responseBody);

    expect(responseBody.name).toBe(updatedUser.name);
  });

  test("Delete User", async({request})=>{

    const response= await userApi.deleteUser(1);

    expect(response.status()).toBe(200);
  });

});
