
import { test , expect } from "@playwright/test";

import { ApiHelper } from "../utils/ApiHelper";


test("GET Request Using ApiHelper", async({request})=>{


    //Create object of ApiHelper Class

    const api= new ApiHelper(request);

    //Use reusable GET method

    const response= await api.get('/users/1');

    //Verify status code

    expect(response.status()).toBe(200);

    const responseBody= await response.json();

    console.log(responseBody);

    expect(responseBody.id).toBe(1);
})