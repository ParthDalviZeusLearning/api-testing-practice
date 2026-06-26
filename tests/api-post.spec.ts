
import { test ,expect } from "@playwright/test";

test("Create New User" , async({request}) => {
   
    const url= 'https://jsonplaceholder.typicode.com/users';

   // Request Body
    const userData = {
        name: "Parth",
        job: "QA Engineer"
    };

    //Sends post request 
    const response = await request.post(url , {

          data: userData 
    });

    //Print the HTTP status code
    console.log("Status Code:", response.status());

    // Convert response body into JSON
   
    const responseBody = await response.json();

    //Print the response body 
     console.log ("Response Body:", responseBody);


     //Verify user was created successfully
     expect(response.status()).toBe(201);
    

     //Verify the server returns the same data we sent 
     expect(responseBody.name).toBe(userData.name);

     expect(responseBody.job).toBe(userData.job);

     //Verify that server generated an ID
     
     expect(responseBody.id).toBeTruthy();
     
});