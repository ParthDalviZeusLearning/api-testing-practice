import { test , expect, request } from '@playwright/test';


test('GET User Details', async({request})=>{
   

    const url= 'https://jsonplaceholder.typicode.com/users/2';
    // Send GET request
    const response = await request.get(url);
   
    // Print status code
     console.log("Status Code: ", response.status());

     //Convert Response to JSON
     const responseBody= await response.json();

     //Print response
     console.log(responseBody);

     //Validate status code
     expect(response.status()).toBe(200);

     //Validate response body
     expect(responseBody.id).toBe(2);

     expect(responseBody.name).toBe("Ervin Howell");

     expect(responseBody.username).toBe("Antonette");

});